const findTheOutlier = (arr) => {
    const evenArr = []
    const oddArr = []
    for(let i = 0; i < arr.length; i++) {
        arr[i]%2===0 ? evenArr.push(arr[i]) : oddArr.push(arr[i])
    }
    return evenArr.length < oddArr.length ? evenArr.join('') : oddArr.join('')
}
