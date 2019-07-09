module.exports = (data, backendApp) => {
    return new Promise((rs,rj)=>{
        const error = 'Role is invalid';
        const client = backendApp.mongoose.model('Client');
        const action = (e,r) => {
            if (e) return rj(error);
            if (!r) return rj(error);
            if (r) return rs(r);
        };

        client.findOne({_id:req.user._id, role:data.role}).exec(action);
    });
};

