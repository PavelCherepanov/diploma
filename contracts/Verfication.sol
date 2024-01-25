// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Verification {
    constructor() {}

    uint256 public countFiles = 0;

    struct File {
        string ipfsHash;
    }

    mapping (string  => File) private fileHashes;

    function uploadFile(string calldata ipfsHash) public {
        if (keccak256(abi.encode(ipfsHash)) == keccak256(abi.encode(fileHashes[ipfsHash].ipfsHash))){
            revert('File Already Exists');
        }
        File storage file = fileHashes[ipfsHash]; 
        file.ipfsHash = ipfsHash;
        countFiles += 1;
    }

    function verifyFile(string calldata ipfsHash) public view returns (File memory){
        if (keccak256(abi.encode(ipfsHash)) != keccak256(abi.encode(fileHashes[ipfsHash].ipfsHash))){
            revert('File Not Found');
        }
        return fileHashes[ipfsHash];
    }

    function getFilesCount() public view returns (uint256) {
        return countFiles;
    }
}