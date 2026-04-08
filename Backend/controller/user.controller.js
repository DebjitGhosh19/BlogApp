export const register=async (req,res) => {
 const {name,email,phone,password,education,role,}=req.body;
  const image= {
        url: req.file.path,
        public_id: req.file.filename
      };
 console.log(name,email,phone,password,education,role,image);
 
  
}