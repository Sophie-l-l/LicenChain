// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.0/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.0/contracts/access/Ownable.sol";

contract LicenChain is ERC721, Ownable {
    uint256 public tokenCounter;
    uint256 public constant mintingFee = 0.0015 ether; // $1.50 approx
    uint256 public constant auditServiceFee = 0.0006 ether; // ~2% of $30

    struct License {
        address licensee;
        uint256 tokenId;
        string terms;
        uint256 timestamp;
    }

    struct AuditRequest {
        address requester;
        uint256 tokenId;
        uint256 timestamp;
    }

    // tokenId → creator
    mapping(uint256 => address) public creators;

    // tokenId → license terms
    mapping(uint256 => string) public licenseTerms;

    // tokenId → license price
    mapping(uint256 => uint256) public licensePrices;

    // tokenId → licenses
    mapping(uint256 => License[]) public licenses;

    // Audit logs
    AuditRequest[] public auditRequests;

    event ArtMinted(uint256 tokenId, address creator, uint256 price);
    event LicensePurchased(uint256 tokenId, address licensee, string terms, uint256 value);
    event AuditRequested(uint256 tokenId, address requester);

    constructor() ERC721("LicenChainArt", "LCA") {
        tokenCounter = 0;
    }

    // Mint a new NFT with license terms and price
    function mintArt(string memory _licenseTerms, uint256 _price) external payable {
        require(msg.value >= mintingFee, "Minting fee of $1.50 required");
        uint256 tokenId = tokenCounter;

        _safeMint(msg.sender, tokenId);
        creators[tokenId] = msg.sender;
        licenseTerms[tokenId] = _licenseTerms;
        licensePrices[tokenId] = _price;
        tokenCounter++;

        // Send minting fee to platform (contract owner)
        payable(owner()).transfer(msg.value);

        emit ArtMinted(tokenId, msg.sender, _price);
    }

    // View license terms for a token
    function getLicenseTerms(uint256 _tokenId) public view returns (string memory) {
        return licenseTerms[_tokenId];
    }

    // Purchase a license
    function purchaseLicense(uint256 _tokenId) external payable {
        require(_tokenId < tokenCounter, "Token does not exist");

        uint256 price = licensePrices[_tokenId];
        require(msg.value >= price, "Insufficient license fee");

        uint256 platformCut = (msg.value * 5) / 100; // 5%
        uint256 creatorCut = msg.value - platformCut;

        // Payouts
        payable(creators[_tokenId]).transfer(creatorCut);
        payable(owner()).transfer(platformCut);

        licenses[_tokenId].push(License({
            licensee: msg.sender,
            tokenId: _tokenId,
            terms: licenseTerms[_tokenId],
            timestamp: block.timestamp
        }));

        emit LicensePurchased(_tokenId, msg.sender, licenseTerms[_tokenId], msg.value);
    }

    // View license history for a token
    function getLicenses(uint256 _tokenId) external view returns (License[] memory) {
        return licenses[_tokenId];
    }

    // Request audit service (sends fee to platform)
    function requestAudit(uint256 _tokenId) external payable {
        require(_tokenId < tokenCounter, "Token does not exist");
        require(msg.value >= auditServiceFee, "Audit fee required");

        // Store audit request
        auditRequests.push(AuditRequest({
            requester: msg.sender,
            tokenId: _tokenId,
            timestamp: block.timestamp
        }));

        // Send audit fee to platform
        payable(owner()).transfer(msg.value);

        emit AuditRequested(_tokenId, msg.sender);
    }

    // View all audit requests
    function getAllAuditRequests() external view returns (AuditRequest[] memory) {
        return auditRequests;
    }
}
