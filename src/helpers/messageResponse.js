
/**
 * Generate messages response
 * 
 * @param number statusCode
 * @param string message
 * @param string path
 * @return { statusCode, message, path }
 */
export const generateMessageResponse = (statusCode, message, path) => {

    if(path){

        return {statusCode, path,message}
    }

    return {statusCode, message}
}
