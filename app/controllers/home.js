module.exports = function() {
    var controller = {};
    controller.index = function(req, res) {
        res.json({
            mensagem: 'Express API 2.0'
        });
    };
    return controller;
}