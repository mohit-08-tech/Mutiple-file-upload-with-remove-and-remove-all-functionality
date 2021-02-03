function UploadFiles(){
    $(".btnRemoveAll").hide();
    var fileCount = 0;
    var showFileCount = function () {
      $("#file_count").text("# Files selected: " + fileCount);
      if(fileCount>0){
        $(".btnRemoveAll").show();
      }
      else{
        $(".btnRemoveAll").hide();
      }
    };
    showFileCount();
$.fn.fileUploader = function (filesToUpload, sectionIdentifier) {
    var fileIdCounter = 0;

    this.closest(".files").change(function (evt) {
        var output = [];
        for (var i = 0; i < evt.target.files.length; i++) {
            fileIdCounter++;
            var file = evt.target.files[i];
            var fileId = sectionIdentifier + fileIdCounter;

            filesToUpload.push({
                id: fileId,
                file: file
            });
            var removeLink = "<a class=\"removeFile\" href=\"#\" data-fileid=\"" + fileId + "\"><img src=\"close.png\" alt=\"Can't load img\" title=\"Remove File\" ></a>";
            
            output.push("<li>", escape(file.name), "&nbsp;&nbsp;&nbsp;", removeLink, "</li> ");
        };
        fileCount += evt.target.files.length;
        $(this).children(".fileList").append(output.join(""));
        evt.target.value = null;
        showFileCount();
    });
    $(this).on("click", ".removeFile", function (e) {
        e.preventDefault();
        $(this).parent().remove();
        fileCount -= 1;
        showFileCount();
    });
    $(this).on("click", ".btnRemoveAll", function (e) {
        e.preventDefault();
        $("li").remove();
        fileCount = 0;
        showFileCount();
    });
};
    var filesToUpload = [];
    $("#files1").fileUploader(filesToUpload, "files1");
}
UploadFiles();