module.exports = {
  HTML: function (queryData_email) {
     return `
      <form action="/team/team_register_process?email=${queryData_email}" method="post">                                
        <input type="text" name="team_name" placeholder="team_name">                                          
        <input type="submit">                  
      </form>
      `
  }
}      