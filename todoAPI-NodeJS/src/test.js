const fetch = async () => {
  return new Promise((resolve, reject) => resolve({ text: 'some text' }));
};
const print = async(input)=>console.log(JSON.parse(input));

const foo=async()=>{
  let result=await fetch();
  print(result);

}
foo();
