let htmlStr = ''; 
htmlStr += ` 
  <ol>
    <li>테마</li>
    <li>이름</li>
    <li>평점</li>
    <li>썸네일</li>
    <li>제목(title)</li>
    <li>주인공이름</li>
  </ol>
    
    <br /> 
    .... 
`; 
    
var list = document.getElementById("list"); 
list.innerHTML = htmlStr;