'use strict';
// const option={
//   headers: new HEADERS({ Accept: 'application/vnd.github.v3+json'})
// };
// Will need the following part later on USERNAME/repos"

//This is to fetch the result from Github API
function getResult(searchHandle){
   fetch(`https://api.github.com/users/${searchHandle}/repos`)
   .then(response => response.json())
   .then(responseJson => displayResult(responseJson))
   .catch(error => alert('Looks like no user with that name!')) 
}

//This fucntion is to display the results on the page
function displayResult(responseJson){
  $('#resultsList').empty();
  for (let i=0; i<responseJson.length; i++){
    let repoName=responseJson[i].full_name;
    console.log(repoName);    
    let repoLink=responseJson[i].html_url;
    console.log(repoLink);
    $('#resultsList').append(
      `<li>
          <h4><a href="${repoLink}">${repoName}</a></h4>
        </li>`)
    };
  $('.results').removeClass('hidden');
}
//This function is to collect the username when users click submit
function watchForm(){
    $('#gitHubHandle').empty();
    $('form').submit(event =>{
        event.preventDefault();
        const searchHandle=$(`input[type="text"]`).val();
        getResult(searchHandle);
        console.log(searchHandle);
})
};

//Call function watchForm once the page is fully loaded
$(function(){
    console.log('App loaded! Waiting for submit!');    
    watchForm();
});
