export const postPredicted = (predicted) => {
    return{
        type: 'POST_PREDICTED',
        predicted
    }
}