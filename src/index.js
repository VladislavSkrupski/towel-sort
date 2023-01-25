module.exports = function towelSort(matrix = []) {
    if (matrix.length === 0) return [];
    let linearArray = [];
    matrix.forEach((subArray, index) => {
        linearArray = linearArray.concat(index % 2 === 0 ? subArray : subArray.reverse());
    })
    return linearArray;
}
