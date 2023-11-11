// this simply opens up the oneProduct pane
// this function is written here because it is not
// just used in one place

export const toggle = (node) => {
  if (typeof node === "string") node = document.getElementById(`${node}`);
  node?.classList.toggle("shFm");
};

export const getOneProduct = (product, setProduct, id) => {
  let prods = product.find((prod) => prod.id == id);
  setProduct(prods);
};

export const setInt = (length, setVal, time) => {
  return setInterval(() => {
    let rand = Math.floor(Math.random() * length);
    setVal(rand);
  }, time);
};

export const mapStateToProp = (...args) => {
  return function mapStateToProps(state) {
    let newObj = {};
    for (let i = 0; i < args.length; i++) {
      newObj[args[i]] = state[args[i]];
    }
    return {
      ...newObj,
    };
  };
};

export const deleteFromFireBase = async (url, storage , folder) => {
  try {
    let pic = await storage.ref(`/${folder}/${url}`).delete()
    
  } catch (error) {
    console.log(error);
  }
  
};

export const handleChange = (
  e, 
  ref,
  storage,
  folder,
  uploadBytesResumable,
  setFileUploaded,
  getDownloadURL,
  setInputData,
  inputData , 
  ) => {
    let name = e.target.name,
    value = e.target.value;
    
    setInputData({
      ...inputData,
      [name]: value,
    });
    
    if (name === "img") {
    value = e.target.files[0];
    const imageRef = ref(storage, `${folder}/${value.name}`);
    const upload = uploadBytesResumable(imageRef, value);

    upload.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        if (uploadProgress === 100) {
          setFileUploaded(true);
          alert("file uploaded successfully");
        }
      },

      (err) => console.log(err),
      async () => {
        const url = await getDownloadURL(upload.snapshot.ref);
        setInputData({
          ...inputData,
          img: url,
        });
      }
    );
  }

  if (name === "sizes") {
    setInputData({
      ...inputData,
      sizes: value.split("-"),
    });
  }
  if (name === "colors") {
    setInputData({
      ...inputData,
      colors: value.split("-"),
    });
  }
  
  if (name === "message") {
    setInputData({
      ...inputData,
      message: value.split("-"),
    });
  }
};

export  function merged(lists ){
  
  const normal = (lists) =>{
    let newArr = []
    for( const item of lists ){
       if( !newArr.includes( item.section) ) {
          newArr = [...newArr , item.section]
       }
    }
    return newArr
 }
 
 const filter = ( lists , sect) =>{
    const filtered = lists.filter(item => {
       const { section , ...rest } =  item
       if(item.section === sect) return rest
    }
       )
       return filtered
 }
 const newObj = (lists) =>{
    let arr = []
    let newObject = {}
    let newArr = normal(lists)
 
    for( let i of newArr){
       newObject[i] = filter(lists , i)
       
    }

    arr = Object.keys(newObject).map(key =>{
      return { [key] : newObject[key]}
    })
    return arr
 }
  return newObj(lists)
 }

 export function resetForm(){
  const form = document.querySelector('form')
  form.reset()
 }
