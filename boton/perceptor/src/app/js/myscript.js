function validate() {
    var settings = {
        "url": "http://192.168.137.5:8091/devops/jenkins/job/FOLDER_OPSDEV/job/SCCOLCOMUNES/job/OPTIMIZACION/job/FREE_STYLE/job/TRIGGER_MACROS_SIN_PARAMS/build?token=11a78018ef44bdc4ebcce077bbcefa36eb",
        "method": "HEAD",
        "timeout": 0,
        "headers": {
          "Authorization": "Basic Z2lvdmFuZW1lcmU6QmFuY28xMjMq"
        },
      };
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}
$("#validate").bind("click", validate);