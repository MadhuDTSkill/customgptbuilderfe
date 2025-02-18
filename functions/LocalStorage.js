'use client'

// Function to store data in localStorage
export function storeData(key, value) {
    localStorage?.setItem(key, JSON.stringify(value));
}

// Function to retrieve data from localStorage
export function getData(key) {
    try {
        const data = localStorage?.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    catch (error) {
        console.error('Error retrieving data from localStorage:', error);
        return null;
    }
}

// Function to remove data from localStorage
export function removeData(key) {
    localStorage?.removeItem(key);
}

// Function to clear all data from localStorage
export function clearData() {
    localStorage?.clear();
}