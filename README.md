# Node.js Project Setup

This guide will help you set up a Node.js project with the following packages:
- `cookie-parser`
- `dotenv`
- `ejs`
- `express`
- `express-ejs-layouts`
- `mongoose`

## Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

## Pre-Setup

1. **Create a new repository**
   - Go onto Github Desktop
   - Click on current repository near the top left
   - Click add
   - Click create new repository
   - Fill out the information
   - Open the folder in file explorer

2. **Download this folder**
   - Click the code dropdown
   - Download ZIP
   - Extract it into your newly made repository

## Project Setup

1. **Initialize a new Node.js project:**
   ```bash
   npm init -y

2. **Install the required packages:**
   ```bash
   npm install cookie-parser dotenv ejs express express-ejs-layouts mongoose

## Configuration

1. **Package.json File**
   Edit script to the following:
   ``` json
   "scripts": {
    "dev": "node --trace-warnings .",
    "start": "node --unhandled-rejections=warn --trace-deprecation ."
   },

2. **Add a new file called .gitignore**
   Add the following text in it:
   ```.gitignore
   node_modules/