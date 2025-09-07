function greatestProduct(matrix) {
  
  
    // ------------ Vertical  Iteration Function --------------------------------
  function horizonSweep(matrix) {
    let product = 0;
    let maxProduct = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j <= matrix[i].length - 4; j++) {
        product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];
        if (product > maxProduct) {
          maxProduct = product;
        }
      }
    }
    return maxProduct;
  }

  // ------------ Function to Rotate Matrix Left by 90 Degrees -------------------
  function rotateLeft(m) {
    // Get number of rows and columns in the original matrix
    let rows = m.length;
    let cols;
    if (rows > 0) {
      cols = m[0].length;
    } else {
      cols = 0;
    }
    // Create a new empty matrix with swapped dimensions
    let rotated = [];
    for (let i = 0; i < cols; i++) {
      rotated[i] = new Array(rows);
    }

    // Fill the new matrix with rotated values (90 degrees to the left)
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rotated[cols - 1 - j][i] = m[i][j];
      }
    }
    return rotated;
  }

  let maxProduct1 = horizonSweep(matrix);
  let rotatedMatrix = rotateLeft(matrix);
  let maxProduct2 = horizonSweep(rotatedMatrix);

  let maxProduct = Math.max(maxProduct1, maxProduct2);

  return maxProduct;
}
