import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import MetaData from "../../MetaData/MetaData";
import "../PrivacyPage/privacy.css";
export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MetaData title="Chính sách công ty" />
      <div class="privacy-pages">
        <Container className="container-privacy">
          <h1 class="privacy-policy-title mb-3">
            Chính Sách Bảo Mật Của XCareer :
          </h1>
          <p class="desc mb-4">
            XCareer.vn tôn trọng những thông tin cá nhân của bạn. Chúng tôi hiểu
            rằng bạn cần biết chúng tôi quản lý những thông tin cá nhân tập hợp
            được từ trang Web site XCareer.vn như thế nào. Xin hãy đọc và tìm
            hiểu về những quy định bảo mật thông tin sau đây của chúng tôi. Nếu
            bạn không chấp thuận bản quy định bảo mật này, xin đừng truy cập vào
            trang Website XCareer.vn. Việc bạn truy cập, đăng ký, sử dụng trang
            Web này có nghĩa rằng bạn đồng ý và chấp nhận ràng buộc bởi các điều
            khoản của bản quy định bảo mật của chúng tôi.
          </p>
          <div class="info-colected mb-4 pb-2">
            <h4 class="sub-title mb-3">Thông tin được thu thập</h4>
            <p>
              XCareer.vn tập hợp các thông tin cá nhân của bạn như: tên, email,
              điạ chỉ, số điện thoại, ngày sinh, và các thông tin khác, nhằm mục
              đích nhận biết các thông tin riêng của từng cá nhân khi bạn đăng
              ký hay sử dụng trang Website XCareer.vn.
            </p>
            <p>
              Khi bạn truy cập vào trang Web của chúng tôi, chúng tôi không yêu
              cầu bạn cung cấp các thông tin cá nhân. Tuy nhiên để có thể truy
              cập những nơi cần sự đăng ký, bạn phải thực hiện việc đăng ký bằng
              cách cung cấp các thông tin theo yêu cầu của chúng tôi.
            </p>
            <p class="m-0">
              Chúng tôi chỉ tập hợp các thông tin để đáp ứng nhu cầu của người
              truy cập và chỉ khi cần thiết cho mục đích thương mại của chúng
              tôi trên cơ sở tuân thủ quy định pháp luật. Chúng tôi cũng tập hợp
              các thông tin thông thường của người truy cập vào Website như: địa
              chỉ IP, trình duyệt Web, các kiểu của hệ thống điều hành, thời
              gian, ngày bạn truy cập vào Website, và những sự mô tả khác. Chúng
              tôi có thể kết hợp những thông tin thông thường với những thông
              tin cá nhân.
            </p>
          </div>
          <div class="use-data mb-4 pb-2">
            <h4 class="sub-title mb-3">Cách thức sử dụng thông tin</h4>
            <p>
              Thông thường, chúng tôi sử dụng các thông tin bạn cung cấp chỉ để
              hồi đáp những câu hỏi hay thực hiện các yêu cầu của bạn. Thông tin
              cá nhân của bạn có thể bị chia sẻ với những công ty khác, nhưng
              chỉ khi cần thiết để đáp ứng các yêu cầu của bạn hay cho những mục
              đích liên quan.
            </p>
            <p>
              Chúng tôi không cung cấp các thông tin cá nhân của bạn cho bên thứ
              3 để thực hiện các dịch vụ cho riêng họ khi chưa có sự đồng ý của
              bạn. Nhưng chúng tôi có thể chia sẻ thông tin cho các cá nhân,
              công ty mà chúng tôi thuê để cung cấp các dịch vụ cho chúng tôi.
              Chúng tôi cũng có thể cung cấp các thông tin khi thông tin đó được
              xác định có ảnh hưởng, tác động tiêu cực cho bên thứ ba, chúng tôi
              cũng có thể cung cấp, tiết lộ những thông tin này khi được pháp
              luật cho phép và trong bất cứ các trường hợp khác mà chúng tôi có
              sự xác định hợp lý rằng điều đó cần thiết để cung cấp dịch vụ cho
              các cá nhân.
            </p>
            <p class="m-0">
              Dữ liệu khách hàng của XCareer.vn có thể được chuyển nhượng cho
              người kế thừa hay người được chỉ định để quản lý công ty khi công
              ty bị sáp nhập, bị mua lại hoặc phá sản.
            </p>
          </div>
          <div class="security mb-4 pb-2">
            <h4 class="sub-title mb-3">
              Bảo đảm an toàn đối với các thông tin thu thập được
            </h4>
            <p class="m-0">
              Chúng tôi chỉ tập hợp lại các thông tin cá nhân trong phạm vi phù
              hợp và cần thiết cho mục đích thương mại đúng đắn của chúng tôi.
              Và chúng tôi duy trì các biện pháp thích hợp nhằm bảo đảm tính an
              toàn, nguyên vẹn, độ chính xác, và tính bảo mật những thông tin mà
              bạn đã cung cấp. Ngoài ra, chúng tôi cũng có những biện pháp thích
              hợp để đảm bảo rằng bên thứ ba cũng sử dụng các biện pháp bảo đảm
              an toàn cho các thông tin mà chúng tôi cung cấp cho họ.
            </p>
          </div>
          <div class="cookies mb-4 pb-2">
            <h4 class="sub-title mb-3">Cookies</h4>
            <p class="m-0">
              Cookies là những file nhỏ được Download để ghi chép các hoạt động
              trong 1 Website. Chúng tôi sử dụng cookies để ghi chép các hoạt
              động của nguời sử dụng hay mục đích của người sử dụng không muốn
              xem cùng nội dung quảng cáo được lặp đi lặp lại nhiều lần.Ngoài
              ra, chúng tôi cũng sử dụng cookies để đáp ứng các yêu cầu của
              người sử dụng và các mục đích khác. Trong trang Website của chúng
              tôi, chúng tôi có thể đặt quảng cáo của cá nhân, đơn vị khác,
              những quảng cáo này có thể thu thập cookies của bạn và XCareer
              không thể truy cập vào thông tin này . Bất kể lúc nào bạn truy cập
              vào Website, hầu hết các trình duyệt đặt chế độ cookies tự động
              nhận .Nếu bạn muốn làm mất hiệu lực cookies, có thẻ cài đặt
              cookies trong trình duyệt, tuy nhiên chúng tôi có những thiết lập
              sẳn những ứng dụng vô hiệu hóa thẻ cài đặt cookies.
            </p>
          </div>
          <div class="link-other-site mb-4 pb-2">
            <h4 class="sub-title mb-3">Liên kết các Website khác</h4>
            <p class="m-0">
              Nếu bạn nhấn đường liên kết sang Website thứ 3, bao gồm cả trang
              quảng cáo, bạn sẽ rời trang XCareer.vn và sẽ đến trang Web bạn đã
              chọn. Chúng tôi không thể kiểm soát các hoạt động của bên thứ 3 và
              không chịu trách nhiệm về sự an toàn hay bât kế những nội dung gì
              có trong Website đó.
            </p>
          </div>
          <div class="edit-and-detele mb-4 pb-2">
            <h4 class="sub-title mb-3">Sửa đổi và xoá thông tin tài khoản</h4>
            <p>
              Bạn có thể sửa đổi hoặc cập nhật thông tin tài khoản của mình bất
              cứ lúc nào. Ngay cả khi bạn tự xóa thông tin đó, chúng tôi có thể
              khôi phục thông tin đó từ cơ sở dữ liệu của mình để giải quyết
              tranh chấp, thực thi thỏa thuận người dùng hoặc cho các mục đích
              khác, các yêu cầu kỹ thuật và pháp lý liên quan đến sự an toàn và
              hoạt động của Trang web của chúng tôi.
            </p>
            <p>
              XCareer có thể hỗ trợ xóa thông tin nếu người dùng yêu cầu, nhưng
              người yêu cầu sẽ phải chứng minh mình có quyền hợp pháp đối với
              thông tin đó.
            </p>
            <p class="m-0">
              Gửi cho chúng tôi qua email: <b>contact@XCareer.vn</b>
            </p>
          </div>
          <div class="change-policy mb-4 pb-2">
            <h4 class="sub-title mb-3">Điều khoản thay đổi</h4>
            <p class="m-0">
              Chúng tôi có quyền thay đổi nội dung của các điều khoản này. Xin
              thường xuyên xác nhận để biết về các điều khoản thay đổi trong bản
              quy định bảo mật của chúng tôi. Thêm vào đó chúng tôi sẽ thông báo
              cho bạn bằng email khi có những thay đổi quan trọng về cách sử
              dụng liên quan các thông tin cá nhân của bạn. Trong trường hợp bạn
              từ chối các điều khoản thay đổi có trong XCareer.vn, xin liên hệ
              chúng tôi theo địa chỉ E-mail (
              <a href="mailto:contact@XCareer.vn">contact@XCareer.vn</a>). Khi
              bạn tiếp tục sử dụng trang Web này, có nghĩa là bạn đồng ý và chấp
              nhận bị ràng buộc với các thay đổi trong bản quy định bảo mật trực
              tuyến này.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
