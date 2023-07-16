export default function BookList() {
   let pageTitle = "Must Reads";
   let book1 = "https://m.media-amazon.com/images/I/51p1WxfBJAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51wZ8r6BaJL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";   
   let book3 = "https://m.media-amazon.com/images/I/51PNUlzZqlL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";

   return (
      <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="The Chronicles of Narnia" />
      <img src={book2} alt="Gone Series" />
      <img src={book3} alt="A Series of Unfortunate Events" />
   </div>      
   );
}