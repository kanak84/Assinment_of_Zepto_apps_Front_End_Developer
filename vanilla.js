<html>





<body>
<script>
    {
fetch('https://gutendex.com/data')
    .then(response => response.json())
.then(data => console.log(data))
data.forEach(post => {
    console.log(post.title)};

});
})
.catch(error => console.error(error));


const searchTerm = 'javascript';
    {
        fetch(`https://gutendex.com/data=${searchTerm}`)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }
const options = {
    { method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'My First Blog Post',
        body: 'This is the body of my first blog post.'
    })
}
    }

fetch('https://gutendex.com/posts', options)
    .then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));



        const options = {
    {  method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({
        id: 1,
        title: 'My Updated Blog Post',
        body: 'This is the updated body of my first blog post.'
    })
    }
    }
    {
        fetch('https://gutendex.com/posts/1', options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    }

</script>
</body>

</html>