import multer from 'multer'


const storage = multer.diskStorage({                // we define a storage engine using diskStorage. diststorage are woek two things "destination" and "filename".
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export default upload