# Number Dashboard API

This project implements a simple Node.js API that categorizes numbers into files based on specific criteria. Once each file has at least one number, no new numbers can be entered, and the process is complete.

## Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/Deepsk315/dreamroots.git
   cd dreadroots
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

## API Endpoints

### POST /dashboard/input

Multiplies the input number by 7 and stores the result in the appropriate file.

#### Request

- **Method:** POST
- **URL:** `http://localhost:3002/dashboard/input`
- **Body:**
  ```json
  {
    "number": 5
  }
  ```

#### Responses

**Valid Input that goes to file D**

- **Expected Response:**
  - **Status:** 200 OK
  - **Body:**
    ```
    Number 5 multiplied by 7 is 35 stored in D.txt
    ```

**Valid Input that goes to file C**

- **Request:**
  ```json
  {
    "number": 10
  }
  ```
- **Expected Response:**
  - **Status:** 200 OK
  - **Body:**
    ```
    Number 10 multiplied by 7 is 70 stored in C.txt
    ```

**Valid Input that goes to file B**

- **Request:**
  ```json
  {
    "number": 15
  }
  ```
- **Expected Response:**
  - **Status:** 200 OK
  - **Body:**
    ```
    Number 15 multiplied by 7 is 105 stored in B.txt
    ```

**Valid Input that goes to file A**

- **Request:**
  ```json
  {
    "number": 21
  }
  ```
- **Expected Response:**
  - **Status:** 200 OK
  - **Body:**
    ```
    Number 21 multiplied by 7 is 147 stored in A.txt
    ```

**Input Number Out of Range (below 1)**

- **Request:**
  ```json
  {
    "number": 0
  }
  ```
- **Expected Response:**
  - **Status:** 400 Bad Request
  - **Body:**
    ```
    Number must be between 1 and 25
    ```

**Input Number Out of Range (above 25)**

- **Request:**
  ```json
  {
    "number": 26
  }
  ```
- **Expected Response:**
  - **Status:** 400 Bad Request
  - **Body:**
    ```
    Number must be between 1 and 25
    ```

**Attempt Input After All Files Filled**

- **Setup:** Ensure that files A, B, C, and D are already filled with numbers from previous valid inputs.
- **Request:**
  ```json
  {
    "number": 8
  }
  ```
- **Expected Response:**
  - **Status:** 400 Bad Request
  - **Body:**
    ```
    All files have at least one number, no new numbers can be added.
    ```

**Valid Input But All Files Are Filled**

- **Setup:** Ensure that files A, B, C, and D are already filled with numbers from previous valid inputs.
- **Request:**
  ```json
  {
    "number": 3
  }
  ```
- **Expected Response:**
  - **Status:** 400 Bad Request
  - **Body:**
    ```
    No suitable file found or all files already have entries.
    ```

**Invalid JSON Body**

- **Request:**
  ```json
  {
    "num": 5
  }
  ```
- **Expected Response:**
  - **Status:** 400 Bad Request
  - **Body:**
    ```
    Number must be between 1 and 25
    ```

### GET /files

Retrieves the contents of all files.

#### Request

- **Method:** GET
- **URL:** `http://localhost:3002/files`

#### Response

- **Expected Response:**
  - **Status:** 200 OK
  - **Body:**
    ```json
    {
      "A": "147",
      "B": "105",
      "C": "70",
      "D": "35"
    }
    ```

## Testing

Use Postman to test the API endpoints. The following scenarios should be tested:

### Positive Scenarios

1. **Valid Input that goes to file D**

   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "number": 5
       }
       ```
   - **Expected Response:**
     - **Status:** 200 OK
     - **Body:**
       ```
       Number 5 multiplied by 7 is 35 stored in D.txt
       ```

2. **Valid Input that goes to file C**

   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "number": 10
       }
       ```
   - **Expected Response:**
     - **Status:** 200 OK
     - **Body:**
       ```
       Number 10 multiplied by 7 is 70 stored in C.txt
       ```

3. **Valid Input that goes to file B**

   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "number": 15
       }
       ```
   - **Expected Response:**
     - **Status:** 200 OK
     - **Body:**
       ```
       Number 15 multiplied by 7 is 105 stored in B.txt
       ```

4. **Valid Input that goes to file A**

   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "number": 21
       }
       ```
   - **Expected Response:**
     - **Status:** 200 OK
     - **Body:**
       ```
       Number 21 multiplied by 7 is 147 stored in A.txt
       ```

5. **Get Contents of Files**
   - **Request:**
     - **Method:** GET
     - **URL:** `http://localhost:3002/files`
   - **Expected Response:**
     - **Status:** 200 OK
     - **Body:**
       ```json
       {
         "A": "147",
         "B": "105",
         "C": "70",
         "D": "35"
       }
       ```

### Negative Scenarios

1. **Input Number Out of Range (below 1)**

   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "number": 0
       }
       ```
   - **Expected Response:**
     - **Status:** 400 Bad Request
     - **Body:**
       ```
       Number must be between 1 and 25
       ```

2. **Input Number Out of Range (above 25)**

   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "number": 26
       }
       ```
   - **Expected Response:**
     - **Status:** 400 Bad Request
     - **Body:**
       ```
       Number must be between 1 and 25
       ```

3. **Attempt Input After All Files Filled**

   - **Setup:** Ensure that files A, B, C, and D are already filled with numbers from previous valid inputs.
   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "number": 8
       }
       ```
   - **Expected Response:**
     - **Status:** 400 Bad Request
     - **Body:**
       ```
       All files have at least one number, no new numbers can be added.
       ```

4. **Valid Input But All Files Are Filled**

   - **Setup:** Ensure that files A, B, C, and D are already filled with numbers from previous valid inputs.
   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "number": 3
       }
       ```
   - **Expected Response:**
     - **Status:** 400 Bad Request
     - **Body:**
       ```
       No suitable file found or all files already have entries.
       ```

5. **Invalid JSON Body**
   - **Request:**
     - **Method:** POST
     - **URL:** `http://localhost:3002/dashboard/input`
     - **Body:**
       ```json
       {
         "num": 5
       }
       ```
   - **Expected Response:**
     - **Status:** 400 Bad Request
     - **Body:**
       ```
       Number must be between 1 and 25
       ```
