module.exports = () => {
    return {
        event: 'form-notification',
        fun: (next) => {

            next('on-notification', 'ok2!!')

        }
    }
};