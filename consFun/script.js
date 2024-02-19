function Movie(title, year){
    this.title = title
    this.year = year

    this.getdetails = function(){
        console.log(
            `Title: ${this.title}
            Year: ${this.year}`
        )
    }
}

const movie1 = new Movie("abc", 123);
console.log(movie1);
movie1.getdetails();

const movie2 = new Movie("Cars2", 2000);
console.log(movie2);
movie2.getdetails();