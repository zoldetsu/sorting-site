export const getPageCount = (totalPage: number, limit: number) => {
    return Math.ceil( totalPage / limit)
}


export const getPageArray = (totalPage: number) => {
    let result = []
    for (let i = 0; i < totalPage; i++) {
        result.push( i + 1 )
    }
    return result;
}