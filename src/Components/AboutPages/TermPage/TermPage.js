import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import MetaData from "../../MetaData/MetaData";
import "../TermPage/Termpage.css";
export default function TermPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MetaData title="Quy chế hoạt động"/>
      <div class="term-page">
      <Container className="container-term-page">
        <h1 class="operation-regulation-title mb-4">Quy chế hoạt động</h1>
        <h1 class="main-title mb-4 mt-0 text-center">
          QUY CHẾ HOẠT ĐỘNG CỦA SÀN GIAO DỊCH THƯƠNG MẠI ĐIỆN TỬ XCAREER.VN
        </h1>
        <p class="desc mb-4 pb-2">
          XCAREER.vn (XCAREER) là trung tâm thương mại điện tử phục vụ nhu
          cầu giới thiệu, tìm việc làm trực tuyến cho các thương nhân, tổ chức,
          cá nhân có nhu cầu thông qua tài khoản đăng tin. XCAREER được xây
          dựng nhằm hỗ trợ tối đa cho khách hàng muốn tìm hiểu thông tin về việc
          làm hoặc có nhu cầu tìm việc trực tuyến.Sứ mệnh mà XCAREER hướng
          tới là sẽ trở thành Sàn thương mại điện tử tin cậy trong thị trường
          Thương mại điện tử, là cầu nối thương mại giữa người tìm việc với
          thương nhân, tổ chức, cá nhân có nhu cầu.
        </p>
        <div class="general_principles mb-4 pb-2">
          <h4 class="sub-title mb-3">I. Nguyên tắc chung</h4>
          <p class="mb-4">
            Sàn giao dịch điện tử XCAREER do Công ty TNHH XCAREER (Công
            ty) thực hiện hoạt động và vận hành. Thành viên trên sàn giao dịch
            điện tử là các thương nhân, tổ chức, cá nhân có hoạt động thương mại
            hợp pháp được XCAREER chính thức công nhận và được phép sử dụng
            dịch vụ do Sàn giao dịch điện tử XCAREER và các bên liên quan
            cung cấp.
          </p>
          <p class="mb-4">
            Nguyên tắc này áp dụng cho các thành viên đăng ký sử dụng, tham gia
            đăng tin tuyển dụng hoặc tìm việc làm được thực hiện trên Sàn giao
            dịch Thương mại điện tử XCAREER.
          </p>
          <p class="mb-4">
            Thương nhân, tổ chức, cá nhân tham gia giao dịch tại Sàn Giao dịch
            thương mại điện tử XCAREER tự do thỏa thuận trên cơ sở tôn trọng
            quyền và lợi ích hợp pháp của các bên tham gia hoạt động tuyển dụng
            thông qua hợp đồng, không trái với qui định của pháp luật.
          </p>
          <p class="mb-4">
            Thông tin tuyển dụng hoặc tìm việc làm được đăng tải trên Sàn giao
            dịch thương mại điện tử XCAREER phải đáp ứng đầy đủ các quy định
            của pháp luật có liên quan, không thuộc các trường hợp cấm theo quy
            định của pháp luật.Hoạt động đăng tin tuyển dụng qua Sàn giao dịch
            thương mại điện tử XCAREER phải được thực hiện công khai, minh
            bạch, đảm bảo quyền lợi của người cần tìm việc làm.
          </p>
          <p class="m-0">
            Tất cả các nội dung trong Quy định này phải tuân thủ theo hệ thống
            pháp luật hiện hành của Việt Nam. Thành viên khi tham gia vào Sàn
            giao dịch TMĐT XCAREER phải tự tìm hiểu trách nhiệm pháp lý của
            mình đối với luật pháp hiện hành của Việt Nam và camkết thực hiện
            đúng những nội dung trong Quy chế của Sàn giao dịch TMĐT XCAREER.
          </p>
        </div>
        <div class="general_rules mb-4 pb-2">
          <h4 class="sub-title mb-3">II. Quy định chung</h4>
          <p class="mb-3">
            Tên Miền Sàn Giao dịch Thương mại Điện tử: Sàn giao dịch TMĐT
            XCAREER.vn do Công ty TNHH XCAREER phát triển với tên miền Sàn
            giao dịch là: www.XCAREER.vn (sau đây gọi tắt là: “Sàn giao dịch
            TMĐT XCAREER.vn”).
          </p>
          <div class="mb-4">
            <b class="mb-1 d-block">Định nghĩa chung:</b>
            <ul class="short-list">
              <li>
                Người Tuyển dụng: là thương nhân, tổ chức, cá nhân có nhu cầu sử
                dụng dịch vụ của XCAREER.vn bao gồm: đăng tin tuyển dụng trực
                tuyến, đăng tin giới thiệu công ty. Người tìm việc: là thương
                nhân, tổ chức, cá nhân có nhu cầu tìm hiểu thông tin về việc làm
                được rao trên XCAREER.vn của người bán.
              </li>
              <li>
                Người tìm việc có quyền đăng ký tài khoản hoặc không cần đăng
                ký.
              </li>
            </ul>
          </div>
          <div class="mb-4">
            <span class="mb-1 d-block">
              Thành viên: là bao gồm cả người tuyển dụng lẫn người tìm việc.
            </span>
            <ul class="short-list">
              <li>
                Thành viên tham gia giao dịch trên Sàn giao dịch XCAREER.vn
                là thương nhân, tổ chức, cá nhân có nhu cầu đăng tin tuyển dụng
                hoặc tìm việc làm trên website.
              </li>
              <li>
                Thành viên phải đăng ký kê khai ban đầu các thông tin cá nhân có
                liên quan, được Ban quản lý sàn TMĐT XCAREER.vn chính thức
                công nhận và được phép sử dụng dịch vụ do Sàn giao dịch TMĐT
                XCAREER.vn.
              </li>
            </ul>
          </div>
          <div class="mb-4">
            <span class="mb-1 d-block">
              Khi bạn đăng ký là thành viên của XCAREER.vn, thành viên hiểu
              rằng:
            </span>
            <ul class="short-list">
              <li>
                Thành viên có thể tạo một tài khoản cá nhân của mình để sử dụng.
              </li>
              <li>
                Thành viên có thể đăng tin tuyển dụng theo đúng quy chuẩn, cam
                kết của thành viên hợp pháp đã công bố trên sàn.
              </li>
            </ul>
          </div>
          <div>
            <span class="mb-1 d-block">
              Hàng hóa: Được hiểu là “thông tin việc làm” được đăng tin tại các
              mục trên website XCAREER.vn.
            </span>
            <ul class="short-list mb-0">
              <li>
                Nội dung bản Quy chế này tuân thủ theo các quy định hiện hành
                của Việt Nam. Thành viên khi tham gia vào Sàn giao dịch TMĐT
                XCAREER.vn phải tự tìm hiểu trách nhiệm pháp lý của mình đối
                với luật pháp hiện hành của Việt Nam và cam kết thực hiện đúng
                những nội dung trong Quy chế của Sàn giao dịch XCAREER.vn.
              </li>
            </ul>
          </div>
        </div>
        <div class="transaction_process mb-4 pb-2">
          <h4 class="sub-title mb-3">III. Quy trình giao dịch: </h4>
          <b class="mb-1 d-block">Quy trình dành cho người tìm việc</b>
          <div>
            <p class="mb-1 font-italic">
              1. Đối với đăng tin tìm việc làm (tạo hồ sơ):
            </p>
            <p class="mb-1">
              Khi có nhu cầu đăng tin tìm việc làm trên XCAREER.vn người mua
              nên thực hiện theo các bước sau đây:
            </p>
            <ul class="short-list">
              <li>
                Tạo tài khoản và đăng nhập tài khoản;- Tạo bộ hồ sơ cá nhân theo
                mẫu;
              </li>
              <li>Lưu hồ sơ;</li>
              <li>
                Kiểm tra thông tin tuyển dụng khi có nhà tuyển dụng xem hồ sơ
                đó;
              </li>
              <li>
                Người tìm việc và người tuyển dụng thỏa thuận đi đến kết quả
                (tuy vào thỏa thuận của người tìm việc và người tuyển dụng)
              </li>
            </ul>
          </div>
          <div>
            <p class="mb-1 font-italic">
              2. Đối với thành viên tìm kiếm việc làm trên XCAREER.vn:
            </p>
            <ul class="short-list">
              <li>
                Bước 1: Đăng nhập tài khoản (không bắt buộc) trên XCAREER.vn;
              </li>
              <li>
                Bước 2: Lựa chọn công việc mà thành viên có nhu cầu. Tìm hiểu
                các thông tin liên quan đến công việc (điều kiện tuyển dung,
                quyền lợi người làm…);
              </li>
              <li>
                Click vào nút “Nộp đơn” (bộ hồ sơ cá nhân lưu trong tài khoản
                của thành viên) để gửi hồ sơ đến người tuyển dụng hoặc người tìm
                việc liên hệ trực tiếp đến người tuyển dụng thỏa thuận về điều
                kiện tuyển dụng;
              </li>
              <li>
                Bước 4: Người tuyển dụng xác nhận lại thông tin với người tìm
                việc.
              </li>
            </ul>
          </div>
          <b class="mb-1 d-block">Quy trình dành cho người tuyển dụng</b>
          <div>
            <p class="mb-1 font-italic">
              1. Chuẩn bị tin bài bằng chữ và hình ảnh:
            </p>
            <ul class="short-list mb-1">
              <li>
                Các tin bài cần đăng phải được chia thành 2 phần được phân theo
                định dạng bằng chữ và hình ảnh.
              </li>
              <li>
                Các nội dung bằng chữ nên được đánh máy sẵn trên một chương
                trình soạn thảo văn bản ( MS Word, OpenOffice) theo định dạng
                font Arial, cỡ chữ 10.- Các nội dung bằng hình ảnh được định
                dạng theo dạng ảnh jpg, bmp, hoặc gif.
              </li>
            </ul>
            <p class="mb-1 font-italic">2. Đưa nội dung lên website:</p>
            <p class="mb-1">
              Để đưa tin bài lên website, cần thực hiện tuần tự các bước sau
            </p>
            <ul class="short-list">
              <li>Đăng nhập với thông tin đã được đăng ký tại XCAREER.vn</li>
              <li>
                Thành viên điền thông tin về công việc cần tuyển theo mẫu đã có
                sẵn. Sau khi chắn về nội dung thành viên gửi tin bài đó- Nội
                dung đăng tin của thành viên sẽ được xếp vào phần tuyển dụng
                theo công loại hình công việc đã chọn.
              </li>
            </ul>
          </div>
          <div class="mb-4">
            <b class="d-block mb-1">Chính sách giao nhận, vận chuyển</b>
            <p class="mb-0">
              Do đặc thù XCAREER.vn là website cho phép người tuyển dụng và
              người có nhu cầu tìm việc làm đăng tải những thông tin liên quan
              đến công việc cần tuyển hoặc giới thiệu những khả năng làm việc
              của bản thân. Nên Công ty không có chính sách giao nhận, vận
              chuyển. Việc tuyển dung, giao dịch là hoàn toàn dựa trên việc đàm
              phám giữa người tuyển dụng và người tìm việc qua các hình thực như
              : Phỏng vấn, thi tuyển, gọi điện…
            </p>
          </div>
          <div class="mb-4">
            <b class="d-block mb-1">Quy trình hỗ trợ giải quyết khiếu nại</b>
            <p class="mb-1">
              XCAREER.vn và người bán có trách nhiệm tiếp nhận khiếu nại và
              hỗ trợ người tìm việc và người tuyển dụng liên quan đến các nội
              dung công việc đăng tải trên website XCAREER.vn.
            </p>
            <p class="mb-1">
              Gửi khiếu nại tại địa chỉ: Công ty TNHH XCAREER
            </p>
            <p class="mb-1">
              Địa chỉ: Tòa nhà VIETTEL 285 Cách mạng tháng 8, quận 10 TP.Hồ Chí Minh
            </p>
            <span class="mr-4">Hotline: <b>028 38675711</b></span>{" "}
            <span>Email:</span>
            <b>contact@XCAREER.vn</b>
          </div>
          <div>
            <p class="mb-1">
              XCAREER.vn tôn trọng và nghiêm tục thực hiện các quy định của
              pháp luật về bảo vệ quyền lợi của người tìm việc. Vì vậy, đề nghị
              các thành viên đăng tin tuyển dụng trên sàn cung cấp đầy đủ, chính
              xác, trung thực và chi tiết các thông tin liên quan đến nội dung
              công việc. Mọi hành vi lừa đảo, gian lận đều bị lên án và phải
              chịu hoàn toàn trách nhiệm trước pháp luật.
            </p>
            <p class="mb-1">
              Các bên bao gồm người tìm việc, người tuyển dụng sẽ phải có vai
              trò trách nhiệm trong việc tích cực giải quyết vấn đề. Đối với
              người tuyển dụng cần có trách nhiệm cung cấp văn bản giấy tờ chứng
              thực thông tin liên quan đến sự việc đang gây mâu thuẫn với người
              tìm việc. Đối với XCAREER.vn sẽ có trách cung cấp những thông
              tin liên quan đến người tìm việc và người tuyển dụng nếu được một
              trong hai bên (liên quan đến tranh chấp đó) yêu cầu.
            </p>
            <p class="mb-1">
              Sau khi người tìm việc, người tuyển dụng đã giải quyết xong tranh
              chấp phải có trách nhiệm báo lại cho bán quản trị XCAREER.vn.
              Trong trường hợp giao dịch phát sinh mâu thuẫn mà lỗi thuộc về
              người tuyển dụng: XCAREER.vn sẽ có biện pháp cảnh cáo, khóa tài
              khoản hoặc chuyển cho cơ quan pháp luật có thẩm quyền tùy theo mức
              độ của sai phạm. XCAREER.vn sẽ chấm dứt và gỡ bỏ toàn bộ tin
              bài về nội dung công việc của người tuyển dụng đó trên
              XCAREER.vn. Nếu thông qua hình thức thỏa thuận mà vẫn không thể
              giải quyết được mâu thuẫn phát sinh từ giao dịch giữa 2 bên người
              tìm việc, người tuyển dụng, thì một trong hai bên sẽ có quyền nhờ
              đến cơ quan pháp luật có thẩm quyền can thiệp nhằm đảm bảo lợi ích
              hợp pháp của các bên.
            </p>
          </div>
        </div>
        <div class="payment-process">
          <h4 class="sub-title mb-3">IV. Quy trình thanh toán</h4>
          <p>
            Website XCAREER.vn bán các gói dịch vụ cho các công ty cần tuyển
            dụng nhân sự và thu phí. Để thanh toán người tuyển dụng lựa chọn các
            cách sau: chuyển khoản, thanh toán trực tiếp cho nhân viên kinh
            doanh. Ngoài ra đối việc người tìm việc và người tuyển dụng nếu có
            phát sinh phí thì hai bên sẽ tự thỏa thuận với nhau để đưa ra phương
            thức thanh toán phù hợp nhất.
          </p>
        </div>
        <div class="transaction-safety">
          <h4 class="sub-title mb-3">V. Đảm bảo an toàn giao dịch</h4>
          <p>
            Ban quản lý sẽ áp dụng các biện pháp kỹ thuật để bảo vệ thông tin về
            nội dung tin XCAREER.vn. Để đảm bảo các giao dịch tuyển dụng được
            tiến hành thành công, hạn chế tối đa rủi ro có thể phát sinh. Người
            tuyển dụng phải cung cấp thông tin đầy đủ về đối tượng đăng tin
            (tên, địa chỉ, số điện thoại, email).Người tìm việc trực tiếp liên
            hệ lại với người tuyển dụng để xác nhận lại những thông tin được
            đăng tải tại XCAREER.vn có chính xác không. Trong trường hợp
            người tuyển dụng yêu cầu bạn phải chuyển 1 khoản tiền trước khi nộp
            hồ sơ. Người tìm việc phải thận trọng, tìm hiểu những thông tin liên
            quan đến người tuyển dụng, không loại trừ việc đến tận nơi tuyển
            dụng (nếu có thể) trước khi đưa ra quyết định. XCAREER.vn không
            chịu trách nhiệm về những thiệt hại hay rủi ro thành viên có thể
            gánh chịu khi chưa tìm hiểu các điều kiện liên quan đến công việc
            đăng tải.Người tìm việc tuyệt đối không sử dụng bất kỳ chương trình,
            công cụ hay hình thức nào khác để can thiệp vào hệ thống hay làm
            thay đổi cấu trúc dữ liệu. Nghiêm cấm việc phát tán, truyền bá hay
            cổ vũ cho bất kỳ hoạt động nào nhằm can thiệp, phá hoại hay xâm của
            hệ thống website. Mọi vi phạm sẽ bị xử lý theo Quy chế và quy định
            của pháp luật.Mọi thông tin giao dịch được bảo mật, trừ trường hợp
            buộc phải cung cấp khi Cơ quan pháp luật yêu cầu.
          </p>
        </div>
        <div class="protect-information">
          <h4 class="sub-title mb-3">
            VI. Bảo vệ thông tin cá nhân khách hàng
          </h4>
          <div class="mb-3">
            <p class="mb-1 font-italic">1. Mục đích và phạm vi thu thập</p>
            <p class="mb-1">
              Việc thu thập dữ liệu chủ yếu trên Sàn giao dịch TMĐT
              XCAREER.vn bao gồm: email, điện thoại, tên đăng nhập, mật khẩu
              đăng nhập, địa chỉ khách hàng (thành viên). Đây là các thông tin
              mà XCAREER.vn cần thành viên cung cấp bắt buộc khi đăng ký sử
              dụng dịch vụ và để XCAREER.vn liên hệ xác nhận khi khách hàng
              đăng ký sử dụng dịch vụ trên website nhằm đảm bảo quyền lợi cho
              cho người tiêu dùng.
            </p>
            <p class="mb-0">
              Các thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi
              hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư
              điện tử của mình. Ngoài ra, thành viên có trách nhiệm thông báo
              kịp thời cho Sàn giao dịch TMĐT XCAREER.vn về những hành vi sử
              dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và
              mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.
            </p>
          </div>
          <div class="mb-4">
            <p class="mb-1 font-italic">2. Phạm vi sử dụng thông tin</p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn sử dụng thông tin thành viên cung
              cấp để:
            </p>
            <ul class="short-list">
              <li>Cung cấp các dịch vụ đến thành viên;</li>
              <li>
                Gửi các thông báo về các hoạt động trao đổi thông tin giữa thành
                viên và Sàn giao dịch TMĐT XCAREER.vn;
              </li>
              <li>
                Ngăn ngừa các hoạt động phá hủy tài khoản người dùng của thành
                viên hoặc các hoạt động giả mạo thành viên;- Liên lạc và giải
                quyết với thành viên trong những trường hợp đặc biệt.
              </li>
              <li>
                Không sử dụng thông tin cá nhân của thành viên ngoài mục đích
                xác nhận và liên hệ có liên quan đến giao dịch tại
                XCAREER.vn.- Trong trường hợp có yêu cầu của pháp luật: Sàn
                giao dịch TMĐT XCAREER.vn có trách nhiệm hợp tác cung cấp
                thông tin cá nhân thành viên khi có yêu cầu từ cơ quan tư pháp
                bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên
                quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài
                ra, không ai có quyền xâm phạm vào thông tin cá nhân của thành
                viên.
              </li>
            </ul>
          </div>
          <div class="mb-4">
            <p class="mb-1 font-italic">3. Thời gian lưu trữ thông tin</p>
            <p class="mb-0">
              Dữ liệu cá nhân của Thành viên sẽ được lưu trữ cho đến khi có yêu
              cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn
              lại trong mọi trường hợp thông tin cá nhân thành viên sẽ được bảo
              mật trên máy chủ của XCAREER.vn.
            </p>
          </div>
          <div class="mb-4">
            <p class="mb-1 font-italic">
              4. Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân Công
              ty TNHH XCAREER
            </p>
            <span class="mr-4">
              Trụ sở chính: Tòa nhà VIETTEL 285 Cách mạng tháng 8, quận 10 TP.Hồ Chí Minh
            </span> {" "}
            <span>Email:</span>
            <b>contact@XCAREER.vn</b>
          </div>
          <div class="mb-4">
            <p class="mb-1 font-italic">
              5. Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ
              liệu cá nhân của mình
            </p>
            <p class="mb-1">
              Thành viên có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ
              thông tin cá nhân của mình bằng cách đăng nhập vào tài khoản và
              chỉnh sửa thông tin cá nhân hoặc yêu cầu XCAREER.vn thực hiện
              việc này.
            </p>
            <p class="mb-0">
              Thành viên có quyền gửi khiếu nại về việc lộ thông tin các nhân
              cho bên thứ 3 đến Ban quản trị của Sàn giao dịch thương mại điện
              tử XCAREER.vn. Khi tiếp nhận những phản hồi này, XCAREER.vn
              sẽ xác nhận lại thông tin, phải có trách nhiệm trả lời lý do và
              hướng dẫn thành viên khôi phục và bảo mật lại thông tin.
            </p>
            <span>Email:</span>
            <b>contact@XCAREER.vn</b>
          </div>
          <div class="mb-4">
            <p class="mb-1 font-italic">
              6. Cam kết bảo mật thông tin cá nhân khách hàng
            </p>
            <ul class="short-list">
              <li>
                Thông tin cá nhân của thành viên trên XCAREER.vn được
                XCAREER.vn cam kết bảo mật tuyệt đối theo chính sách bảo vệ
                thông tin cá nhân của XCAREER.vn. Việc thu thập và sử dụng
                thông tin của mỗi thành viên chỉ được thực hiện khi có sự đồng ý
                của khách hàng đó trừ những trường hợp pháp luật có quy định
                khác.
              </li>
              <li>
                Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên
                thứ 3 nào về thông tin cá nhân của thành viên khi không có sự
                cho phép đồng ý từ thành viên.
              </li>
              <li>
                Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công
                dẫn đến mất mát dữ liệu cá nhân thành viên, XCAREER.vn sẽ có
                trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử
                lý kịp thời và thông báo cho thành viên được biết.
              </li>
              <li>
                Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của Thành
                viên bao gồm thông tin hóa đơn kế toán chứng từ số hóa tại khu
                vực dữ liệu trung tâm an toàn cấp 1 của XCAREER.vn.
              </li>
              <li>
                Ban quản lý XCAREER.vn yêu cầu các cá nhân khi đăng ký là
                thành viên, phải cung cấp đầy đủ thông tin cá nhân có liên quan
                như: Họ và tên, địa chỉ liên lạc, email, số chứng minh nhân dân,
                điện thoại,... và chịu trách nhiệm về tính pháp lý của những
                thông tin trên. Ban quản lý XCAREER.vn không chịu trách nhiệm
                cũng như không giải quyết mọi khiếu nại có liên quan đến quyền
                lợi của Thành viên đó nếu xét thấy tất cả thông tin cá nhân của
                thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.
              </li>
            </ul>
          </div>
        </div>
        <div class="protect-member mb-4">
          <h4 class="sub-title mb-3">VII. Bảo vệ quyền lợi của thành viên</h4>
          <p class="mb-0">
            Ban quản lý Sàn yêu cầu các cá nhân khi đăng ký là thành viên, phải
            cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, địa
            chỉ liên lạc, email, số chứng minh nhân dân, điện thoại, số tài
            khoản, số thẻ thanh toán ..., và chịu trách nhiệm về tính pháp lý
            của những thông tin trên. Ban quản lý XCAREER.vn không chịu trách
            nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền
            lợi của người mua đó nếu xét thấy tất cả thông tin cá nhân của người
            mua đó cung cấp khi đăng ký ban đầu là không chính xác.Thành viên có
            quyền phản ánh về chất lượng của website XCAREER.vn đến ban quản
            trị. Mặt khác thành viên cũng có thể phản ánh tính xác thực về những
            tin bài liên quan đến nội dung của người tuyển dụng.Sàn giao dịch
            TMĐT XCAREER.vn luôn đảm bảo giải quyết những phản ánh, khiếu nại
            liên quan đến chất lượng của website XCAREER.vn. Đối với những
            phản ánh liên quan đến các thành viên hoạt động trên sàn giao dịch
            TMĐT XCAREER.vn ban quản trị sẽ có biện pháp xử lý tuy theo mức
            độ.
          </p>
        </div>
        <div class="bad-information-management mb-4">
          <h4 class="sub-title mb-3">VIII. Quản lý thông tin xấu</h4>
          <div class="mb-3">
            <p class="mb-1 font-italic">1. Quy định thành viên:</p>
            <p class="mb-1">
              Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt
              động sử dụng dịch vụ dưới tên đăng ký, mật khẩu của mình. Thành
              viên có trách nhiệm thông báo kịp thời cho Sàn giao dịch TMĐT
              XCAREER.vn về những hành vi sử dụng trái phép, lạm dụng, vi
              phạm bảo mật, lưu giữ tên đăng ký và mật khẩu của bên thứ ba để có
              biện pháp giải quyết phù hợp.
            </p>
            <p class="mb-1">
              Thành viên không sử dụng dịch vụ của Sàn giao dịch TMĐT
              XCAREER.vn vào những mục đích bất hợp pháp, không hợp lý, lừa
              đảo, đe doạ, thăm dò thông tin bất hợp pháp, phá hoại, tạo ra và
              phát tán virus gây hư hại tới hệ thống, cấu hình, truyền tải thông
              tin của Sàn giao dịch TMĐT XCAREER.vn hay sử dụng dịch vụ của
              mình vào mục đích đầu cơ, lũng đoạn thị trường tạo những đơn đặt
              hàng, chào hàng giả, kể cả phục vụ cho việc phán đoán nhu cầu thị
              trường. Trong trường hợp vi phạm thì thành viên phải chịu trách
              nhiệm về các hành vi của mình trước pháp luật.Thành viên không
              được thay đổi, chỉnh sửa, gán gép, copy, truyền bá, phân phối,
              cung cấp và tạo những công cụ tương tự của dịch vụ do Sàn giao
              dịch TMĐT XCAREER.vn cung cấp cho một bên thứ ba nếu không được
              sự đồng ý của Sàn giao dịch TMĐT XCAREER.vn trong bản Quy chế
              này.
            </p>
            <p class="mb-0">
              Thành viên không được hành động gây mất uy tín của Sàn giao dịch
              MTĐT XCAREER.vn dưới mọi hình thức như gây mất đoàn kết giữa
              các thành viên bằng cách sử dụng tên đăng ký thứ hai, thông qua
              một bên thứ ba hoặc tuyên truyền, phổ biến những thông tin không
              có lợi cho uy tín của Sàn giao dịch TMĐT XCAREER.vn.
            </p>
          </div>
          <div>
            <p class="mb-1 font-italic">
              Cơ chế rà soát, kiểm soát thông tin của Ban quản lý Sàn giao dịch
              TMĐT đối với tin bài đăng tải trên website:
            </p>
            <p class="mb-1">
              Sau khi thành viên đăng tin tuyển dụng sẽ được hiện thị ngay.
              Nhưng các thông tin này sẽ được bộ phận biên tập quản lý nội dung
              XCAREER.vn kiểm soát và xét duyệt chặt chẽ hàng giờ liên tục
              hàng ngày.XCAREER.vn Có đưa ra các gói dịch vụ liên quan đến
              việc đăng tin tuyển dụng có thu phí.
            </p>
            <p class="mb-0">
              Đối với loại tin bài này sẽ được kiểm tra nội dung trước khi đăng.
              XCAREER.vn sẽ toàn quyền loại bỏ các tin đăng của thành viên
              nếu như tin đăng rao bán vi phạm quy chế đăng tin. Các tin đăng
              không phù hợp với chuyên mục quy định sẽ bị xóa hoặc XCAREER.vn
              chuyển sang chuyên mục khác cho là hợp lý. XCAREER.vn giữ quyền
              quyết định về việc lưu giữ hay loại bỏ tin đã đăng trên trang web
              này mà không cần báo trước.
            </p>
          </div>
        </div>
        <div class="rights-and-obligations mb-4">
          <h4 class="sub-title mb-3">
            IX. Quyền và nghĩa vụ của Ban quản lý Sàn GD TMĐT XCAREER.vn
          </h4>
          <div class="mb-3">
            <p class="mb-1 font-italic">
              1. Quyền của Ban quản lý Sàn giao dịch TMĐT XCAREER.vn
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn sẽ tiến hành cung cấp các dịch vụ
              cho những thành viên tham gia sau khi đã hoàn thành các thủ tục và
              các điều kiện bắt buộc mà Sàn giao dịch TMĐT XCAREER.vn nêu ra.
            </p>
            <p class="mb-1">
              Trong trường hợp có cơ sở để chứng minh thành viên cung cấp thông
              tin cho Sàn giao dịch TMĐT XCAREER.vn không chính xác, sai
              lệch, không đầy đủ hoặc vi phạm pháp luật hay thuần phong mỹ tục
              Việt Nam thì Sàn giao dịch TMĐT XCAREER.vn có quyền từ chối,
              tạm ngừng hoặc chấm dứt quyền sử dụng dịch vụ của thành viên.
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn có thể chấm dứt quyền thành viên
              và quyền sử dụng một hoặc tất cả các dịch vụ của thành viên và sẽ
              thông báo cho thành viên trong thời hạn ít nhất là một (01) tháng
              trong trường hợp thành viên vi phạm các Quy chế của Sàn giao dịch
              TMĐT XCAREER.vn hoặc có những hành vi ảnh hưởng đến hoạt động
              kinh doanh trên Sàn giao dịch TMĐT XCAREER.vn.
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn sẽ xem xét việc chấm dứt quyền sử
              dụng dịch vụ và quyền thành viên của thành viên nếu thành viên
              không tham gia hoạt động giao dịch và trao đổi thông tin trên Sàn
              giao dịch TMĐT XCAREER.vn liên tục trong ba (03) tháng. Nếu
              muốn tiếp tục trở thành thành viên và được cấp lại quyền sử dụng
              dịch vụ thì phải đăng ký lại từ đầu theo mẫu và thủ tục của Sàn
              giao dịch TMĐT XCAREER.vn.
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn có thể chấm dứt ngay quyền sử
              dụng dịch vụ và quyền thành viên của thành viên nếu Sàn giao dịch
              TMĐT XCAREER.vn phát hiện thành viên đã phá sản, bị kết án hoặc
              đang trong thời gian thụ án, trong trường hợp thành viên tiếp tục
              hoạt động có thể gây cho Sàn giao dịch TMĐT XCAREER.vn trách
              nhiệm pháp lý, có những hoạt động lừa đảo, giả mạo, gây rối loạn
              thị trường, gây mất đoàn kết đối với các thành viên khác của Sàn
              giao dịch TMĐT XCAREER.vn, hoạt động vi phạm pháp luật hiện
              hành của Việt Nam. Trong trường hợp chấm dứt quyền thành viên và
              quyền sử dụng dịch vụ thì tất cả các chứng nhận, các quyền của
              thành viên được cấp sẽ mặc nhiên hết giá trị và bị chấm dứt.
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn giữ bản quyền sử dụng dịch vụ và
              các nội dung trên Sàn giao dịch TMĐT XCAREER.vn theo các quy
              dịnh pháp luật về bảo hộ sở hữu trí tuệ tại Việt Nam. Tất cả các
              biểu tượng, nội dung theo các ngôn ngữ khác nhau đều thuộc quyền
              sở hữu của Sàn giao dịch TMĐT XCAREER.vn. Nghiêm cấm mọi hành
              vi sao chép, sử dụng và phổ biến bất hợp pháp các quyền sở hữu
              trên.
            </p>
            <p class="mb-0">
              Sàn giao dịch TMĐT XCAREER.vn giữ quyền được thay đổi bảng,
              biểu giá dịch vụ và phương thức thanh toán trong thời gian cung
              cấp dịch vụ cho thành viên theo nhu cầu và điều kiện khả năng của
              Sàn giao dịch TMĐT XCAREER.vn và sẽ báo trước cho thành viên
              thời hạn là một (01) tháng.
            </p>
          </div>
          <div class="mb-2">
            <p class="mb-1 font-italic">
              2. Nghĩa vụ và trách nhiệm của Ban quản lý Sàn giao dịch TMĐT
              XCAREER.vn
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn có trách nhiệm xây dựng, thực
              hiện “cơ chế kiểm tra, giám sát để đảm bảo việc cung cấp thông tin
              của người tuyến dụng trên sàn giao dịch thương mại điện tử được
              thực hiện chính xác đầy đủ” theo quy định tại Khoản 4 Điều 36 Nghị
              định 52/2013/NĐ-CP.
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn chịu trách nhiệm xây dựng Sàn
              giao dịch bao gồm một số công việc chính như: nghiên cứu, thiết
              kế, mua sắm các thiết bị phần cứng và phần mềm, kết nối Internet,
              xây dựng chính sách phục vụ cho hoạt động Sàn giao dịch TMĐT
              XCAREER.vn trong điều kiện và phạm vi cho phép. Sàn giao dịch
              TMĐT XCAREER.vn sẽ tiến hành triển khai và hợp tác với các đối
              tác trong việc xây dựng hệ thống các dịch vụ, các công cụ tiện ích
              phục vụ cho việc giao dịch của các thành viên tham gia và người sử
              dụng trên Sàn giao dịch TMĐT XCAREER.vn.
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn có trách nhiệm tiếp nhận phản ánh
              từ thành viên nếu sảy ra tranh chấp giữa người tìm việc và người
              tuyển dụng. Ban quản trị sẽ cần nhắc xem xét nhưng phản ánh đó.
              Tuy theo mức độ Sàn giao dịch TMĐT XCAREER.vn sẽ có phướng án
              giải bảo vệ quyền lợi của thành viên.
            </p>
            <p class="mb-1">
              Sàn giao dịch TMĐT XCAREER.vn chịu trách nhiệm xây dựng, bổ
              sung hệ thống các kiến thức, thông tin về: nghiệp vụ ngoại thương,
              thương mại điện tử, hệ thống văn bản pháp luật thương mại trong
              nước và quốc tế, thị trường nước ngoài, cũng như các tin tức có
              liên quan đến hoạt động của Sàn giao dịch TMĐT XCAREER.vn.
            </p>
            <p class="mb-0">
              Sàn giao dịch TMĐT XCAREER.vn sẽ tiến hành các hoạt động xúc
              tiến, quảng bá Sàn giao dịch TMĐT XCAREER.vn ra thị trường nước
              ngoài trong phạm vi và điều kiện cho phép, góp phần mở rộng, kết
              nối đáp ứng các nhu cầu tìm kiếm bạn hàng và phát triển thị trường
              nước ngoài của các thành viên tham gia Sàn giao dịch TMĐT
              XCAREER.vn.
            </p>
          </div>
          <div>
            <p class="mb-0">
              Sàn giao dịch TMĐT XCAREER.vn sẽ cố gắng đến mức cao nhất trong
              phạm vi và điều kiện có thể để duy trì hoạt động bình thường của
              Sàn giao dịch TMĐT XCAREER.vn và khắc phục các sự cố như: sự cố
              kỹ thuật về máy móc, lỗi phần mềm, hệ thống đường truyền internet,
              nhân sự, các biến động xã hội, thiên tai, mất điện, các quyết định
              của cơ quan nhà nước hay một tổ chức liên quan thứ ba. Tuy nhiên
              nếu những sự cố trên xẩy ra nằm ngoài khả năng kiểm soát, là những
              trường hợp bất khả kháng mà gây thiệt hại cho thành viên thì Sàn
              giao dịch TMĐT XCAREER.vn không phải chịu trách nhiệm liên đới.
            </p>
          </div>
        </div>
        <div class="responsibilities-of-members mb-4">
          <h4 class="sub-title mb-3">
            X. Quyền và trách nhiệm thành viên tham gia Sàn giao dịch
            TMĐTXCAREER.vn
          </h4>
          <div class="mb-2">
            <p class="mb-1 font-italic">
              1. Quyền của Thành viên Sàn giao dịch TMĐT XCAREER.vn
            </p>
            <p class="mb-1">
              Khi đăng ký trở thành thành viên của XCAREER.vn và được
              XCAREER.vn đồng ý, thành viên sẽ được XCAREER.vn đăng tin
              bài liên quan đến việc tuyển dụng trên XCAREER.vn.
            </p>
            <p class="mb-1">
              Thành viên sẽ được cấp một tên đăng ký và mật khẩu riêng để được
              vào sử dụng trong việc quản lý những hồ sơ tuyển dụng, nội dung
              công việc đăng tải tại XCAREER.vn.
            </p>
            <p class="mb-1">
              Thành viên sẽ được nhân viên của Sàn giao dịch TMĐT XCAREER.vn
              hướng dẫn sử dụng được các công cụ, các tính năng phục vụ cho việc
              mua hàng hoặc đăng tin rao vặt và sử dụng các dịch vụ tiện ích
              trên Sàn giao dịch TMĐT XCAREER.vn.
            </p>
            <p class="mb-0">
              Thành viên có quyền đóng góp ý kiến cho Sàn giao dịch TMĐT
              XCAREER.vn trong quá trình hoạt động. Các kiến nghị được gửi
              trực tiếp bằng thư, fax hoặc email đến cho Sàn giao dịch TMĐT
              XCAREER.vn.
            </p>
          </div>
          <div>
            <p class="mb-1 font-italic">
              2. Nghĩa vụ của Thành viên Sàn giao dịch TMĐT XCAREER.vn
            </p>
            <p class="mb-1">
              Thành viên sẽ tự chịu trách nhiệm về bảo mật và lưu giữ và mọi
              hoạt động sử dụng dịch vụ dưới tên đăng ký, mật khẩu và hộp thư
              điện tử của mình.Thành viên có trách nhiệm thông báo kịp thời cho
              Sàn giao dịch TMĐT XCAREER.vn về những hành vi sử dụng trái
              phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu
              của mình để hai bên cùng hợp tác xử lý.Thành viên cam kết những
              thông tin cung cấp cho Sàn giao dịch TMĐT XCAREER.vn và những
              thông tin đang tải lên Sàn giao dịch TMĐT XCAREER.vn là chính
              xác.
            </p>
            <p class="mb-1">
              Thành viên tự chịu trách nhiệm về nội dung, hình ảnh của thông tin
              Doanh nghiệp và các thông tin khác cũng như toàn bộ quá trình giao
              dịch với các đối tác trên Sàn giao dịch TMĐT XCAREER.vn.
            </p>
            <p class="mb-1">
              Thành viên người tìm việc, người tuyển dụng có trách nhiệm cung
              cấp thông tin về nội dung công việc tuyển dụng hỗ trợ Sàn giao
              dịch TMĐT XCAREER.vn trong việc giải quyết tranh chấp phát sinh
              giữa người tuyển dụng và người tìm việc diễn ra qua Sàn.
            </p>
            <p class="mb-1">
              Thành viên người tuyển dụng có trách nhiệm bồi thường thiệt hại
              cho người tìm việc nếu chứng minh được lỗi đó thuộc về người tuyển
              dụng.Thành viên cam kết, đồng ý không sử dụng dịch vụ của Sàn giao
              dịch TMĐT XCAREER.vn vào những mục đích bất hợp pháp, không hợp
              lý, lừa đảo, đe doạ, thăm rò thông tin bất hợp pháp, phá hoại, tạo
              ra và phát tán virus gây hư hại tới hệ thống, cấu hình, truyền tải
              thông tin của Sàn giao dịch TMĐT XCAREER.vn hay sử dụng dịch vụ
              của mình vào mục đích đầu cơ, lũng đoạn thị trường tạo những đơn
              đặt hàng, chào hàng giả, kể cả phục vụ cho việc phán đoán nhu cầu
              thị trường. Trong trường hợp vi phạm thì thành viên phải chịu
              trách nhiệm về các hành vi của mình trước pháp luật.Thành viên cam
              kết không được thay đổi, chỉnh sửa, sao chép, truyền bá, phân
              phối, cung cấp và tạo những công cụ tương tự của dịch vụ do Sàn
              giao dịch TMĐT XCAREER.vn cung cấp cho một bên thứ ba nếu không
              được sự đồng ý của Sàn giao dịch TMĐT XCAREER.vn trong Quy định
              này.
            </p>
            <p class="mb-0">
              Thành viên không được hành động gây mất uy tín của Sàn giao dịch
              TMĐT XCAREER.vn dưới mọi hình thức như gây mất đoàn kết giữa
              các thành viên bằng cách sử dụng tên đăng ký thứ hai, thông qua
              một bên thứ ba hoặc tuyên truyền, phổ biến những thông tin không
              có lợi cho uy tín của Sàn giao dịch TMĐT XCAREER.vn.
            </p>
          </div>
        </div>
        <div class="terms-apply mb-4">
          <h4 class="sub-title mb-3">XI. Điều khoản áp dụng</h4>
          <p class="mb-1">
            Quy chế của Sàn giao dịch điện tử XCAREER.vn chính thức có hiệu
            lực thi hành kể từ ngày ký Quyết định ban hành kèm theo Quy chế này.
            Sàn giao dịch điện tử XCAREER.vn có quyền và có thể thay đổi Quy
            chế này bằng cách thông báo lên Sàn giao dịch điện tử XCAREER.vn
            cho các thành viên biết. Quy chế sửa đổi có hiệu lực kể từ ngày
            Quyết định về việc sửa đổi Quy chế có hiệu lực. Việc thành viên tiếp
            tục sử dụng dịch vụ sau khi Quy chế sửa đổi được công bố và thực thi
            đồng nghĩa với việc thành viên đã chấp nhận Quy chế sửa đổi này.
          </p>
          <p class="mb-0">
            Quy chế hoạt động sẽ được XCAREER.vn cập nhật bổ sung liên tục mà
            không cần thông báo trước. Thành viên tham gia XCAREER.vn có
            trách nhiệm tuân theo quy chế hiện hành khi giao dịch trên website.
          </p>
        </div>
        <div class="terms-of-commitment mb-4">
          <h4 class="sub-title mb-3">XII. Điều khoản cam kết</h4>
          <p class="mb-1">
            Mọi thành viên và đối tác/người bán hàng khi sử dụng XCAREER.vn
            làm giao dịch mua bán trực tuyến thì đồng nghĩa việc các bên có liên
            quan đã chấp thuận tuân theo quy chế này.
          </p>
          <p class="mb-1">
            Mọi thắc mắc của khách hàng xin vui lòng liên hệ với XCAREER.vn
            theo thông tin dưới đây để được giải đáp:
          </p>
          <p class="mb-1">Hỗ trợ khách hàng</p>
          <p class="mb-1">Sàn giao dịch thương mại điện tử XCAREER.vn</p>
          <div class="mb-0">
            <span class="mr-4">
            Tòa nhà VIETTEL 285 Cách mạng tháng 8, quận 10 TP.Hồ Chí Minh
            </span>{" "}
            <span>E-mail:</span>
            <b>contact@XCAREER.vn</b>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
}
