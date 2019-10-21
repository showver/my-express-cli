const ResponseModel = {
    msg: '',
    code: 0,
    data: null
};

const CODE = {
    BAD: 400,               // 操作错误返回码
    REJECT: 403,            // 拒绝操作返回码
    SUCCESS: 200,           // 操作成功返回码
    RESIGNIN: 201,          // 重复登录
    NEEDRESIGNIN: 120       // session过期,需要重新登录返回码
};

exports.BAD = CODE.BAD;
exports.REJECT = CODE.REJECT;
exports.SUCCESS = CODE.SUCCESS;
exports.RESIGNIN = CODE.RESIGNIN;
exports.NEEDRESIGNIN = CODE.NEEDRESIGNIN;

/**
 * 自动填充resModel
 *
 * @param msg 提示消息
 * @param code 提示代码
 * @param data 对象
 * @return 返回resModel
 */
exports.FormatRes = (msg, code, data) => {
    ResponseModel.msg = msg;
    ResponseModel.code = code;
    ResponseModel.data = data || null;
    return ResponseModel;
};

/**
 * 请求成功自动填充resModel
 *
 * @param msg 提示消息
 * @param data 对象
 * @return 返回resModel
 */
exports.SUCCESSFUL = (msg, data) => {
    ResponseModel.msg = msg;
    ResponseModel.code = CODE.SUCCESS;
    ResponseModel.data = data || {};
    return ResponseModel;
};

/**
 * 请求失败自动填充resModel
 *
 * @param msg 提示消息
 * @param data 对象
 * @return 返回resModel
 */
exports.FAILED = (msg, data) => {
    ResponseModel.msg = msg;
    ResponseModel.code = CODE.BAD;
    ResponseModel.data = data || null;
    return ResponseModel;
};

/**
 * 拒绝请求自动填充resModel
 *
 * @param msg 提示消息
 * @param data 对象
 * @return 返回resModel
 */
exports.REJECTION = (msg, data) => {
    ResponseModel.msg = msg;
    ResponseModel.code = CODE.REJECT;
    ResponseModel.data = data || null;
    return ResponseModel;
};