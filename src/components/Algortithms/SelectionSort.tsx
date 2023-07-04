export const getSelectionSortAnims = (items: number[]) => {
    const newArr = [...items];
    const animArr: number[][] = [];
    for (let i = 0; i < newArr.length; i++) {
        animArr.push([i, i]);
        let min = i;
        // animArr.push([min, i]);
        for (let j = i + 1; j < newArr.length; j++) {

            if (newArr[j] < newArr[min]) {
                min = j;
                animArr.push([min, j]);
            }
        }
        animArr.push([min, i]);
        const tmp = newArr[min];
        newArr[min] = newArr[i];
        newArr[i] = tmp;
    }
    return { newArr, animArr };
}