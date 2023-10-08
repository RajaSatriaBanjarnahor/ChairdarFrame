$(document).ready(function () {
    const pesanButton = $("#FrameModal button.btn-primary");
    const buyButton = $("#buyFrameModal button.btn-primary");

    buyButton.on("click", function () {
        const frameWidth = $("#frameWidth").val();
        const frameHeight = $("#frameHeight").val();
        const glassAcrylicType = $("#glassAcrylicType").val();
        const customImage = $("#customImage").val();
        const deliveryAddress = $("#deliveryAddress").val();
        const contactName = $("#contactName").val();
        const contactEmail = $("#contactEmail").val();
        const contactPhone = $("#contactPhone").val();
        const specialInstructions = $("#specialInstructions").val();


        if (
            !frameWidth || !frameHeight || !glassAcrylicType || 
            !deliveryAddress || !contactName || !contactEmail || 
            !contactPhone
        ) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mohon lengkapi semua field yang diperlukan.',
            });
        } else {

            const alertMessage = `
                  <div style="text-align: left;">
                      <p><strong>Frame Width:</strong> ${frameWidth} cm</p>
                      <p><strong>Frame Height:</strong> ${frameHeight} cm</p>
                      <p><strong>Glass/Acrylic Type:</strong> ${glassAcrylicType}</p>
                      <p><strong>Custom Image:</strong> ${customImage}</p>
                      <p><strong>Delivery Address:</strong> ${deliveryAddress}</p>
                      <p><strong>Contact Name:</strong> ${contactName}</p>
                      <p><strong>Contact Email:</strong> ${contactEmail}</p>
                      <p><strong>Contact Phone:</strong> ${contactPhone}</p>
                      <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
                  </div>
              `;


            Swal.fire({
                icon: 'success',
                title: 'Pesanan berhasil!',
                html: alertMessage,
            }).then(function () {
                $("#FrameModal").modal("hide");
            });

        }
    });

    pesanButton.on("click", function () {
        const frameType = $("#frameType").val();
        const frameWidth = $("#frameWidth").val();
        const frameHeight = $("#frameHeight").val();
        const frameColorFinish = $("#frameColorFinish").val();
        const glassAcrylicType = $("#glassAcrylicType").val();
        const customImage = $("#customImage").val();
        const deliveryAddress = $("#deliveryAddress").val();
        const contactName = $("#contactName").val();
        const contactEmail = $("#contactEmail").val();
        const contactPhone = $("#contactPhone").val();
        const specialInstructions = $("#specialInstructions").val();


        if (
            !frameType || !frameWidth || !frameHeight || !frameColorFinish ||
            !glassAcrylicType || !deliveryAddress || !contactName ||
            !contactEmail || !contactPhone
        ) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Mohon lengkapi semua field yang diperlukan.',
            });
        } else {

            const alertMessage = `
                  <div style="text-align: left;">
                      <p><strong>Frame Type:</strong> ${frameType}</p>
                      <p><strong>Frame Width:</strong> ${frameWidth} cm</p>
                      <p><strong>Frame Height:</strong> ${frameHeight} cm</p>
                      <p><strong>Frame Color/Finish:</strong> ${frameColorFinish}</p>
                      <p><strong>Glass/Acrylic Type:</strong> ${glassAcrylicType}</p>
                      <p><strong>Custom Image:</strong> ${customImage}</p>
                      <p><strong>Delivery Address:</strong> ${deliveryAddress}</p>
                      <p><strong>Contact Name:</strong> ${contactName}</p>
                      <p><strong>Contact Email:</strong> ${contactEmail}</p>
                      <p><strong>Contact Phone:</strong> ${contactPhone}</p>
                      <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
                  </div>
              `;


            Swal.fire({
                icon: 'success',
                title: 'Pesanan berhasil!',
                html: alertMessage,
            }).then(function () {
                $("#FrameModal").modal("hide");
            });

        }
    });
});