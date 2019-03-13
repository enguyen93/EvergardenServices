const getRecipientsReducer = (recipients = [], action) => {
    if (action.type === "GET_RECIPIENTS") {
        return action.payload;
    }

    return recipients;
}

export { getRecipientsReducer };
