<%@ Control Language="C#" AutoEventWireup="true" CodeFile="ProgressBar.ascx.cs" Inherits="Service_ProgressBar" %>

<link href="../StyleSheet.css" rel="stylesheet" />

<script>
    var i = 0;
    function move(percent, status) {
        if (i == 0) {
            i = 1;
            var checks = document.getElementById("parentdiv1").children;
            var checkIndex = 1
            console.log(checks);
            var elem = document.getElementById("barFilled");
            console.log(checkIndex);
            var width = 1;
            var check = checks[checkIndex];
            console.log(check);
            var checkStatus = status[checkIndex - 1];
            var left = parseInt(check.style.left.replace('%', ''));
            var id = setInterval(frame, 30);

            function frame() {
                if (width >= percent) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";

                    if (width >= left) {
                        var checkClass = "checkpointReached" + checkStatus;
                        console.log(checkClass);
                        check.className = checkClass;
                        if (checkIndex + 1 < checks.length) {
                            checkIndex++;
                            check = checks[checkIndex];
                            checkStatus = status[checkIndex - 1];
                            left = parseInt(check.style.left.replace('%', ''));
                        }

                    }
                }
            }
        }
    }

    function closeModal() {

        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close1")[0];

        modal.style.display = "none";
        window.close();
    }

    function getModal2() {



        document.getElementById("taskdesc").innerHTML = "Did you want to leave a note on this order explaining why it is open?";
        document.getElementById("myModal").style.display = 'block';
        document.getElementById("orderNotes").style.display = 'block';
    }

    function getMemoBox() {
        document.getElementById("memoContainer").style.display = 'flex';
    }

    function submitMemo() {
        //do the things
        var noteText = workQMemo.GetText();
        if (noteText != null && noteText.length > 3) {
            callbackSaveNote.PerformCallback(noteText);
        }
                
    }

    function callModal() {
        var exitDiv = document.getElementById("ProgressBar_exitDiv");
        exitDiv.addEventListener("click", getModal2());
        
    }

</script>


<dx:ASPxCallback ID="callbackSaveNote" runat="server" ClientInstanceName="callbackSaveNote" OnCallback="createCallback_Callback" >
    <ClientSideEvents EndCallback="function(s,e){window.close()}" />
</dx:ASPxCallback>

    <div id="myModal" class="modal" style="display:none;">
            <div class="modal-content">
                <span class="close1" onclick="closeModal()">&times;</span>
                <%--<div id="taskname" style="display: flex; justify-content: center; align-items: center; padding: 2%;"></div>--%>
                <div id="taskdesc" class="taskDescription" style="display: flex; justify-content: center; align-items: center;"></div>
                
                <div id="memoContainer" style="display: flex; flex-direction:column; justify-content: center; align-items: center; padding: 5px;">
                    <dx:ASPxMemo ID="ASPxMemo1" ClientInstanceName="workQMemo" runat="server" Width ="550px" Height ="150px">
                    </dx:ASPxMemo>
                    <dx:ASPxButton ID="memoSubmit" runat="server" CssClass="g-button" Text="Submit" ClientInstanceName="mmSubmit" >
                        <ClientSideEvents Click="function(s,e){submitMemo();}" />
                    </dx:ASPxButton>
                </div>
      
            </div>
    </div>

<div id="container" runat="server" style="width: 100%;">
</div>