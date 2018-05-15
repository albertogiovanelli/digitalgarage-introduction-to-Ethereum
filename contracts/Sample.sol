pragma solidity ^0.4.17;

contract Sample {
    uint storageData;

    function Sample(uint x) public {
        storageData = x;
    }

    function set(uint x) {
        storageData = x;
    }

    function get() constant returns (uint) {
        return storageData;
    }
}