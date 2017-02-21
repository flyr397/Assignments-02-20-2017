  function library() {

           var student = {
               title: "'Twlight'",
			   author: "by Stphenie Meyer",
               readingStatus: "Already read"
           };
		   
		   var student1 = {
			   title: "'Harry Potter'",
			   author: "by J.K. Rowling",
			   readingStatus: "Already read"
		   };
		   var student2 = {
			   title: "'Mocking: The Final Book of The Hunger Games'",
			   author: "by Suzanne Collins",
			   readingStatus: "You still need to read"
		   };

           console.log(student.readingStatus + ' ' + student.title + ' ' + student.author);
		   console.log(student1.readingStatus + ' ' + student1.title + ' ' + student.author);
		   console.log(student2.readingStatus + ' ' + student2.title + ' ' + student2.author);
       }
       library();