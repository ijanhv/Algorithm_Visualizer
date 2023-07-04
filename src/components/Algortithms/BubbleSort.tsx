export const getBubbleSortAnims = (items: number[]) => {
    // bubble sort algorithm
    const newArr = [...items];
    const animArr: number[][] = [];
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                animArr.push([j, j + 1]);
                const tmp = newArr[j];
                newArr[j] = newArr[j + 1];
                newArr[j + 1] = tmp;
            }
        }
    }

    return { newArr, animArr };
}
