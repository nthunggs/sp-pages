// Gymstore AI Internal Training - Slides Data
const SLIDES_DATA = [
  {
    id: 1,
    chapter: "Giới thiệu",
    title: "ĐÀO TẠO NỘI BỘ SPORT PLUS",
    subtitle: "Hiểu đúng về LLM, AI Agent, Provider, Model, CLI, MCP & Agent Automation",
    type: "cover",
    theme: "dark",
    content: `
      <div class="cover-container">
        <img src="logo.jpg" alt="Sport Plus Logo" class="cover-logo">
        <div class="brand-badge">SPORT PLUS ACADEMY</div>
        <h1 class="cover-title">ỨNG DỤNG AI THỰC CHIẾN CHO DOANH NGHIỆP</h1>
        <p class="cover-subtitle">Đồng hành & Tự động hóa vận hành cùng Đại lý AI (AI Agents)</p>
        
        <div class="cover-meta-grid">
          <div class="meta-item">
            <span class="meta-label">Đối tượng</span>
            <span class="meta-value">Leader, HR, Marketing, E-com, CSKH, Kế toán, Kho</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Trình độ</span>
            <span class="meta-value">Không yêu cầu biết lập trình (No-Code)</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Mục tiêu</span>
            <span class="meta-value">Hiểu rõ bản chất, cách vận hành & làm chủ AI Agent</span>
          </div>
        </div>
        
        <div class="footer-note">2025 © Tài liệu lưu hành nội bộ Sport Plus — Không phân phối ra ngoài</div>
      </div>
    `
  },
  {
    id: 2,
    chapter: "Tổng quan",
    title: "NỘI DUNG & LỘ TRÌNH KHÓA HỌC",
    subtitle: "Khung đào tạo thiết kế riêng cho nhân sự vận hành Sport Plus",
    type: "grid",
    content: `
      <div class="grid grid-2">
        <div class="card card-dark">
          <div class="card-header"><span class="number-badge">01</span> Nền tảng & Phân loại</div>
          <ul class="list-styled">
            <li><strong>Chương 1:</strong> Nền tảng AI: LLM, Model, Provider</li>
            <li><strong>Chương 2:</strong> Chatbot khác gì Agent? Phân loại công cụ</li>
            <li><strong>Chương 3:</strong> Tìm hiểu OpenClaw và Hermes Agent</li>
          </ul>
        </div>
        <div class="card card-dark">
          <div class="card-header"><span class="number-badge">02</span> Kết nối & Vận hành</div>
          <ul class="list-styled">
            <li><strong>Chương 4:</strong> CLI là gì và vì sao Agent dùng CLI</li>
            <li><strong>Chương 5:</strong> MCP là gì — Cổng kết nối dữ liệu</li>
            <li><strong>Chương 6:</strong> Cách đấu nối Provider cho Agent</li>
          </ul>
        </div>
        <div class="card card-dark">
          <div class="card-header"><span class="number-badge">03</span> Thực chiến Sport Plus</div>
          <ul class="list-styled">
            <li><strong>Chương 7:</strong> Ứng dụng AI Agent theo phòng ban</li>
            <li><strong>Chương 8:</strong> Tư duy MVP — Triển khai từ nhỏ đến lớn</li>
            <li><strong>Chương 9:</strong> GitHub, Repo và Skill Library cho Sport Plus</li>
          </ul>
        </div>
        <div class="card card-dark">
          <div class="card-header"><span class="number-badge">04</span> Đánh giá & Kiểm soát</div>
          <ul class="list-styled">
            <li><strong>Phụ lục A:</strong> Bài tập thực hành</li>
            <li><strong>Phụ lục B:</strong> Kiểm tra cuối khóa</li>
            <li><strong>Phụ lục C-D:</strong> Khung kiểm soát & Đăng ký MVP</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 3,
    chapter: "Tóm tắt nhanh",
    title: "CÂU TÓM TẮT DỄ NHỚ & BẢNG THUẬT NGỮ",
    subtitle: "Bản đồ khái niệm nhanh dành cho toàn đội ngũ Sport Plus",
    type: "grid",
    content: `
      <div class="summary-phrase">
        <blockquote>
          “<strong>LLM</strong> là bộ não. <strong>Model</strong> là phiên bản não cụ thể. <strong>Provider</strong> là nơi cấp não.<br>
          <strong>Agent</strong> là nhân sự AI biết dùng công cụ. <strong>CLI</strong> là bảng điều lệnh bằng chữ.<br>
          <strong>MCP</strong> là cổng kết nối chuẩn (như USB-C) giữa AI và dữ liệu công ty.”
        </blockquote>
      </div>
      <div class="table-container">
        <table class="table-premium">
          <thead>
            <tr>
              <th>Thuật ngữ</th>
              <th>Giải thích dễ hiểu</th>
              <th>Ví dụ thực tế</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>LLM</strong></td>
              <td>Mô hình ngôn ngữ lớn (bộ não AI)</td>
              <td>Công nghệ cốt lõi đứng sau ChatGPT, Claude</td>
            </tr>
            <tr>
              <td><strong>Model</strong></td>
              <td>Phiên bản bộ não cụ thể</td>
              <td>GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro</td>
            </tr>
            <tr>
              <td><strong>Provider</strong></td>
              <td>Đơn vị cung cấp quyền truy cập model</td>
              <td>OpenAI, Anthropic, Google, OpenRouter</td>
            </tr>
            <tr>
              <td><strong>Agent</strong></td>
              <td>AI tự suy luận, biết dùng công cụ để hành động</td>
              <td>OpenClaw, Hermes Agent, Claude Code</td>
            </tr>
            <tr>
              <td><strong>MCP</strong></td>
              <td>Chuẩn kết nối AI với công cụ và dữ liệu</td>
              <td>Cổng kết nối Sapo, Lark, Excel, G-Sheet</td>
            </tr>
            <tr>
              <td><strong>API Key</strong></td>
              <td>Chìa khóa tài khoản để sử dụng & trả tiền model</td>
              <td>Mã bí mật dạng <code>sk-or-v1-abc...</code></td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 4,
    chapter: "Chương 1",
    title: "LLM (LARGE LANGUAGE MODEL) LÀ GÌ?",
    subtitle: "Nền tảng trí tuệ nhân tạo ngôn ngữ",
    type: "standard",
    content: `
      <div class="concept-section">
        <p class="description-text">
          <strong>LLM (Large Language Model)</strong> là một bộ não ngôn ngữ được huấn luyện từ lượng dữ liệu khổng lồ của nhân loại. Nó có khả năng đọc, hiểu, viết, suy luận, tóm tắt và phân tích ngữ cảnh cực kỳ tốt.
        </p>
        
        <div class="grid grid-2 mt-4">
          <div class="card">
            <div class="card-title text-red">Công việc LLM xử lý cực tốt</div>
            <ul class="list-styled font-sm">
              <li><strong>Viết content:</strong> Gợi ý ý tưởng, viết bài Facebook, viết caption quảng cáo.</li>
              <li><strong>Tối ưu SEO:</strong> Viết meta description, viết lại mô tả sản phẩm chuẩn SEO.</li>
              <li><strong>Xử lý email:</strong> Soạn email gửi nhà cung cấp nước ngoài chuyên nghiệp.</li>
              <li><strong>Phân tích feedback:</strong> Phân nhóm ý kiến của khách hàng để tìm lỗi vận hành.</li>
              <li><strong>Xử lý dữ liệu:</strong> Đọc bảng Excel, tóm tắt số liệu kinh doanh.</li>
            </ul>
          </div>
          
          <div class="card">
            <div class="card-title text-red">Ví dụ thực tế tại Sport Plus</div>
            <div class="gymstore-case">
              <span class="case-badge">Use case</span>
              <p>Khi nhập dữ liệu bán hàng Whey Protein từ Sapo, thay vì tự tính toán thủ công, ta đưa cho LLM và yêu cầu:</p>
              <div class="code-block">"Phân tích giúp tôi SKU nào đang bán chạy nhất, sản phẩm nào có tỷ lệ tồn kho cao và đề xuất chiến dịch marketing tương ứng."</div>
              <p class="mt-2 text-muted italic">LLM sẽ phân tích số liệu và đưa ra báo cáo chi tiết kèm chiến lược bán hàng trong vài giây.</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 5,
    chapter: "Chương 1",
    title: "MODEL AI & PROVIDER KHÁC NHAU THẾ NÀO?",
    subtitle: "Phân biệt Động cơ và Nhà sản xuất / Cung cấp",
    type: "comparison",
    content: `
      <div class="analogy-box">
        💡 <strong>Ẩn dụ dễ hiểu:</strong> Provider giống như <strong>Nhà mạng</strong> (Viettel, Vinaphone). Model giống như <strong>Gói cước</strong> (4G ngày, 4G tháng). Agent giống như <strong>Chiếc điện thoại</strong>. Ta cần đấu nối đúng gói cước vào điện thoại để chạy tốt nhất.
      </div>
      
      <div class="grid grid-2 mt-4">
        <div class="card">
          <div class="card-title text-red">1. Model AI (Bộ não cụ thể)</div>
          <table class="table-mini">
            <thead>
              <tr>
                <th>Model</th>
                <th>Thế mạnh nổi bật</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>GPT (OpenAI)</strong></td>
                <td>Tổng hợp tốt, viết lách, phân tích dữ liệu, logic công việc</td>
              </tr>
              <tr>
                <td><strong>Claude (Anthropic)</strong></td>
                <td>Đọc hiểu tài liệu siêu dài, viết tự nhiên, lập trình xuất sắc</td>
              </tr>
              <tr>
                <td><strong>Gemini (Google)</strong></td>
                <td>Mạnh khi làm việc với hệ sinh thái Google (Drive, Gmail, Sheet)</td>
              </tr>
              <tr>
                <td><strong>DeepSeek / Qwen</strong></td>
                <td>Tối ưu chi phí, mạnh về suy luận toán và kỹ thuật lập trình</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card">
          <div class="card-title text-red">2. Provider (Nhà cung cấp cổng vào)</div>
          <ul class="list-styled font-sm">
            <li><strong>OpenAI:</strong> Nơi cung cấp các model GPT-4o, o1.</li>
            <li><strong>Anthropic:</strong> Nơi cung cấp các model Claude 3.5 Sonnet/Opus.</li>
            <li><strong>Google Cloud:</strong> Cung cấp các model Gemini Pro/Flash.</li>
            <li><strong>OpenRouter:</strong> Một 'chợ trung gian' giúp kết nối hàng trăm model khác nhau của các hãng qua một API key duy nhất.</li>
            <li><strong>Nous Portal / NovitaAI:</strong> Các provider cung cấp model mã nguồn mở chuyên dụng.</li>
          </ul>
          <div class="note-box mt-2">
            💡 <em>Hermes Agent hỗ trợ đổi model linh hoạt bằng dòng lệnh <code>hermes model</code> mà không cần lập trình lại.</em>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 6,
    chapter: "Chương 2",
    title: "CHATBOT THƯỜNG KHÁC GÌ AI AGENT?",
    subtitle: "Bước nhảy vọt từ 'Trò chuyện' sang 'Hành động thực tế'",
    type: "comparison",
    content: `
      <div class="grid grid-2">
        <div class="card card-inactive">
          <div class="card-header text-muted">💬 Chatbot truyền thống (Ví dụ: ChatGPT)</div>
          <div class="p-3">
            <p class="font-bold text-muted">Cách hoạt động:</p>
            <p>Nhận câu hỏi → Trả lời dựa trên kiến thức được học. Chỉ hoạt động trong khung chat.</p>
            
            <p class="font-bold text-muted mt-3">Khả năng giới hạn:</p>
            <ul class="list-dot">
              <li>Chỉ trả lời câu hỏi: "Whey isolate là gì?"</li>
              <li>Viết bài: "Viết caption cho Creatine"</li>
              <li>Không tự thao tác được file, không tự vào website hay gọi phần mềm khác nếu không có người bấm tay.</li>
            </ul>
            
            <div class="badge-status bg-muted mt-4">Người dùng phải tự copy/paste & làm việc chính</div>
          </div>
        </div>
        
        <div class="card card-active">
          <div class="card-header text-red">🤖 AI Agent (Đại lý AI tự vận hành)</div>
          <div class="p-3">
            <p class="font-bold">Cách hoạt động:</p>
            <p>Nhận mục tiêu cuối cùng → Tự lập kế hoạch → Tự gọi công cụ (Tools) → Tự đọc dữ liệu → Thực hiện hành động → Đánh giá kết quả → Báo cáo.</p>
            
            <p class="font-bold mt-3">Khả năng mở rộng:</p>
            <ul class="list-dot">
              <li>"Mở file Excel doanh số, đọc dữ liệu, tạo file báo cáo, gửi email cho Giám đốc."</li>
              <li>Tự động thao tác liên hoàn từ A đến Z không cần giám sát từng bước.</li>
            </ul>
            
            <div class="badge-status bg-red mt-4">AI tự động hóa quy trình — Bạn chỉ duyệt kết quả</div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 7,
    chapter: "Chương 2",
    title: "VÍ DỤ SO SÁNH TRONG THỰC TẾ SPORT PLUS",
    subtitle: "Yêu cầu Marketing & Campaign cho NOW Foods",
    type: "grid",
    content: `
      <div class="grid grid-2">
        <div class="card">
          <div class="card-title text-muted">1. Khi dùng Chatbot thường</div>
          <div class="flow-step">
            <strong>Yêu cầu của bạn:</strong> "Viết giúp tôi caption giới thiệu sản phẩm NOW Omega-3."
          </div>
          <div class="flow-arrow">⬇️</div>
          <div class="flow-step step-result">
            <strong>Kết quả AI trả về:</strong> Đoạn văn bản caption.
          </div>
          <p class="text-sm mt-3 text-muted">👉 Bạn phải tự tải file bán hàng, tự tìm sản phẩm nào bán chạy, tự tính toán số liệu rồi copy vào chatbot.</p>
        </div>
        
        <div class="card border-red">
          <div class="card-title text-red">2. Khi giao việc cho AI Agent</div>
          <div class="flow-step bg-dark-red">
            <strong>Yêu cầu của bạn:</strong> "Kiểm tra 20 sản phẩm NOW bán chạy nhất tháng này, chọn ra 5 sản phẩm nên chạy chiến dịch, tạo lịch content fanpage và Shopee."
          </div>
          <div class="flow-arrow text-red">⬇️</div>
          <div class="flow-step step-agent-running">
            <strong>Agent tự động thực hiện:</strong>
            <ol class="list-numbered font-xs">
              <li>Kết nối cổng API Sapo / Đọc file bán hàng.</li>
              <li>Đọc dữ liệu tồn kho thực tế của NOW Foods.</li>
              <li>Tính toán sản phẩm có lượng tồn cao & tốc độ bán phù hợp.</li>
              <li>Lọc ra 5 SKU tối ưu nhất.</li>
              <li>Viết nháp nội dung content tương ứng.</li>
              <li>Xuất file Excel & gửi link báo cáo trực tiếp trong khung chat.</li>
            </ol>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 8,
    chapter: "Chương 2",
    title: "PHÂN BIỆT CÁC CÔNG CỤ TRONG HỆ SINH THÁI AI",
    subtitle: "Hiểu đúng vai trò của từng công cụ khi làm việc",
    type: "grid",
    content: `
      <div class="grid grid-3">
        <div class="card card-premium">
          <div class="card-header font-md">🛠️ Thợ Chuyên Môn</div>
          <p class="font-bold mt-2">Claude Code, Codex</p>
          <p class="font-xs text-muted mt-2">Là các mô hình AI hoặc công cụ chuyên sâu về lập trình, viết mã.</p>
          <div class="card-footer-note mt-3">
            <strong>Cách dùng:</strong> Phải chỉ tay năm ngón, chỉnh sửa code cùng AI. Thích hợp để xây dựng công cụ mới.
          </div>
        </div>
        
        <div class="card card-premium highlight-border">
          <div class="card-header font-md text-red">🤖 Đại lý Tự Hành (Agent)</div>
          <p class="font-bold mt-2">Hermes Agent, OpenClaw</p>
          <p class="font-xs text-muted mt-2">Là các Agent có khả năng tự tư duy, tự lên kế hoạch từ A-Z để đạt mục tiêu.</p>
          <div class="card-footer-note mt-3">
            <strong>Cách dùng:</strong> Đưa ra mục tiêu cuối cùng (ví dụ: đối soát đơn hàng) và đợi nhận kết quả hoàn thiện.
          </div>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md">🏗️ Công Trường / Văn Phòng</div>
          <p class="font-bold mt-2">Antigravity / IDE</p>
          <p class="font-xs text-muted mt-2">Không phải là AI, mà là môi trường làm việc thông minh nơi con người và AI cùng làm việc.</p>
          <div class="card-footer-note mt-3">
            <strong>Cách dùng:</strong> Nơi bạn (chủ nhà) và Agent (nhà thầu AI) nhìn chung vào một mã nguồn và sơ đồ dữ liệu để làm việc.
          </div>
        </div>
      </div>
    `
  },
  {
    id: 9,
    chapter: "Chương 3",
    title: "TÌM HIỂU OPENCLAW & HERMES AGENT",
    subtitle: "Hai công cụ cốt lõi trong hệ thống Agent nội bộ",
    type: "grid",
    content: `
      <div class="grid grid-2">
        <div class="card">
          <div class="card-title text-red">1. OpenClaw là gì?</div>
          <p class="font-sm text-justify">
            Là trợ lý AI cá nhân chạy trực tiếp trên thiết bị của người dùng. Có khả năng tương tác qua các kênh chat, ra lệnh bằng giọng nói (macOS/iOS/Android) và có giao diện <strong>Live Canvas</strong> trực quan để người dùng theo dõi và điều khiển.
          </p>
          <div class="use-case-box mt-3">
            <strong>Phù hợp nhất cho:</strong>
            <ul class="list-dot font-xs">
              <li>Tự động đọc email, phân loại và soạn sẵn nháp phản hồi.</li>
              <li>Hỗ trợ viết code, quản lý GitHub, chạy lệnh terminal.</li>
              <li>Tự động hóa vận hành văn phòng quy mô vừa và nhỏ.</li>
            </ul>
          </div>
        </div>
        
        <div class="card">
          <div class="card-title text-red">2. Hermes Agent là gì?</div>
          <p class="font-sm text-justify">
            Là Agent tự học và cải tiến (self-improving AI agent) từ Nous Research. Nó có vòng lặp tự học hỏi, tự tạo ra kỹ năng (skills) mới từ kinh nghiệm thực chiến và lưu trữ kiến thức dài hạn.
          </p>
          <div class="use-case-box mt-3">
            <strong>Thế mạnh nổi bật:</strong>
            <ul class="list-dot font-xs">
              <li><strong>Đa kết nối:</strong> Nói chuyện qua Telegram, Slack, Lark, WhatsApp...</li>
              <li><strong>Lịch trình (Cron):</strong> Tự chạy báo cáo, kiểm kho định kỳ.</li>
              <li><strong>Subagents:</strong> Tự chia việc cho các AI phụ chạy song song.</li>
              <li><strong>Học quy trình:</strong> Lưu lại cách xử lý file, viết email để chạy lại.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 10,
    chapter: "Chương 3",
    title: "QUY TRÌNH VẬN HÀNH CỦA AI AGENT",
    subtitle: "Cách thức Agent suy nghĩ và giải quyết vấn đề",
    type: "standard",
    content: `
      <div class="flow-container">
        <div class="flow-horizontal">
          <div class="flow-node highlight">Người dùng giao việc</div>
          <div class="flow-link">➔</div>
          <div class="flow-node">Lập kế hoạch (Reasoning)</div>
          <div class="flow-link">➔</div>
          <div class="flow-node">Gọi công cụ (Tool Call)</div>
          <div class="flow-link">➔</div>
          <div class="flow-node">Đọc & Xử lý dữ liệu</div>
          <div class="flow-link">➔</div>
          <div class="flow-node">Kiểm tra kết quả (Verify)</div>
          <div class="flow-link">➔</div>
          <div class="flow-node highlight">Báo cáo & Phản hồi</div>
        </div>
      </div>
      
      <div class="card mt-4">
        <div class="card-title text-red">Ví dụ thực tế: Yêu cầu tìm kiếm đơn hàng Shopee tăng đột biến</div>
        <ol class="list-numbered font-sm">
          <li><strong>Yêu cầu:</strong> "Tìm xem đơn hàng hôm qua có sản phẩm nào tăng vọt không?"</li>
          <li><strong>Lập kế hoạch:</strong> Agent hiểu cần lấy dữ liệu bán hàng hôm qua và so sánh với trung bình 7 ngày trước.</li>
          <li><strong>Thực hiện:</strong> Agent gọi tool <code>get_shopee_orders</code> lấy dữ liệu, dùng code Python để tính toán tốc độ bán và phần trăm tăng trưởng.</li>
          <li><strong>Kết quả:</strong> Phát hiện SKU <em>NOW-OMEGA-180</em> tăng 150%. Agent tạo bảng báo cáo và gửi trực tiếp cho Leader qua Telegram/Lark.</li>
        </ol>
      </div>
    `
  },
  {
    id: 11,
    chapter: "Chương 4",
    title: "CLI LÀ GÌ? VÌ SAO AGENT CẦN CLI?",
    subtitle: "Giao diện dòng lệnh - Bảng điều khiển tối thượng của AI",
    type: "standard",
    content: `
      <div class="grid grid-2">
        <div class="card">
          <div class="card-title text-red">CLI = Command Line Interface</div>
          <p class="font-sm text-justify">
            CLI là giao diện điều khiển máy tính bằng các <strong>dòng lệnh (text)</strong> thay vì click chuột trên màn hình đồ họa (GUI).
          </p>
          <div class="comparison-inline mt-3">
            <div class="gui-way">🖱️ <strong>Click chuột:</strong> Mở App -> Tìm file -> Click Open -> Click Export</div>
            <div class="cli-way">💻 <strong>Dùng CLI:</strong> Gõ <code>python process_excel.py</code></div>
          </div>
          <p class="font-xs mt-3 text-muted">👉 Đối với AI, việc đọc và gõ chữ nhanh hơn hàng ngàn lần so với việc giả lập click chuột trên màn hình.</p>
        </div>
        
        <div class="card">
          <div class="card-title text-red">Các tác vụ Agent thực hiện qua CLI</div>
          <ul class="list-styled font-sm">
            <li><strong>Xử lý dữ liệu:</strong> Chạy code python xử lý tệp Excel tồn kho lớn.</li>
            <li><strong>Kiểm tra hệ thống:</strong> Đọc log lỗi website, tự chạy lệnh kiểm tra kết nối mạng.</li>
            <li><strong>Quản lý GitHub:</strong> Tự động tải code mới (pull), lưu code (commit), đẩy code (push).</li>
            <li><strong>Đầu nối API:</strong> Gửi yêu cầu lấy dữ liệu từ Sapo hoặc các sàn.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 12,
    chapter: "Chương 4",
    title: "RỦI RO CỦA CLI & NGUYÊN TẮC AN TOÀN",
    subtitle: "Kiểm soát quyền hạn của Agent để bảo vệ dữ liệu doanh nghiệp",
    type: "grid",
    content: `
      <div class="grid grid-2">
        <div class="card card-warning">
          <div class="card-title text-orange">⚠️ Mối nguy hiểm khi cấp quyền sai</div>
          <table class="table-mini table-warning">
            <thead>
              <tr>
                <th>Lệnh / Quyền</th>
                <th>Rủi ro thực tế</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Xóa tệp tin (rm)</strong></td>
                <td>Lỗi xóa nhầm file dữ liệu quan trọng của công ty.</td>
              </tr>
              <tr>
                <td><strong>Ghi đè database</strong></td>
                <td>Làm sai lệch hoặc hỏng database Sapo/đơn hàng thật.</td>
              </tr>
              <tr>
                <td><strong>Lộ khóa API Key</strong></td>
                <td>Khóa bị đẩy lên GitHub công khai, dẫn đến mất tiền sử dụng AI.</td>
              </tr>
              <tr>
                <td><strong>Tự gửi email/chat</strong></td>
                <td>Gửi nhầm email chưa duyệt cho khách hàng hoặc đối tác lớn.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="card card-success">
          <div class="card-title text-green">🛡️ Nguyên tắc vàng cho Sport Plus</div>
          <ul class="list-styled font-sm">
            <li><strong>Phân quyền chặt chẽ:</strong> Nhân sự không có chuyên môn kỹ thuật không tự ý chạy các lệnh hệ thống nguy hiểm.</li>
            <li><strong>Tuyệt đối bảo mật API Key:</strong> Không paste API key vào nhóm chat công khai hoặc commit lên GitHub.</li>
            <li><strong>Quy trình "Nháp trước - Gửi sau":</strong> Ở giai đoạn đầu, Agent chỉ được phép soạn sẵn bản nháp email/tin nhắn để con người duyệt trước khi gửi đi.</li>
            <li><strong>Mọi Agent phải có Owner:</strong> Phải có 1 người chịu trách nhiệm kiểm tra kết quả của Agent đó hàng tuần.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 13,
    chapter: "Chương 5",
    title: "MCP LÀ GÌ? VÌ SAO NÓ LÀ 'USB-C CHO AI'?",
    subtitle: "Model Context Protocol — Chuẩn hóa kết nối thế giới AI",
    type: "standard",
    content: `
      <div class="mcp-diagram">
        <div class="mcp-box agent">AI AGENT (Claude, Hermes,...)</div>
        <div class="mcp-cable">🔌 Cáp kết nối MCP</div>
        <div class="mcp-box server">MCP SERVER (Kết nối Công cụ & Dữ liệu)</div>
        <div class="mcp-cable">🔌</div>
        <div class="mcp-box tools-grid">
          <span>Excel File</span>
          <span>Sapo API</span>
          <span>Lark Base</span>
          <span>Google Drive</span>
        </div>
      </div>
      
      <div class="grid grid-2 mt-4 font-sm">
        <div class="card">
          <div class="card-title text-red">Trước khi có chuẩn MCP</div>
          <p>Mỗi phần mềm AI muốn đọc file hay dùng app khác đều phải viết code kết nối riêng biệt.</p>
          <div class="code-block font-xs text-muted">
            AI ↔️ Gmail (code riêng)<br>
            AI ↔️ Sapo (code riêng)<br>
            AI ↔️ Lark (code riêng)
          </div>
          <p class="mt-2 text-xs italic">Tốn nhiều thời gian phát triển và khó bảo trì.</p>
        </div>
        <div class="card">
          <div class="card-title text-red">Khi có chuẩn MCP</div>
          <p>MCP hoạt động như cổng USB-C. Chỉ cần cắm vào là kết nối được ngay.</p>
          <div class="code-block font-xs">
            AI Agent ➔ Giao thức MCP ➔ MCP Server ➔ Công cụ & Dữ liệu công ty
          </div>
          <p class="mt-2 text-xs italic">Chuẩn hóa giúp Agent có thể sử dụng hàng trăm công cụ khác nhau ngay lập tức.</p>
        </div>
      </div>
    `
  },
  {
    id: 14,
    chapter: "Chương 5",
    title: "BA KHÁI NIỆM CỐT LÕI TRONG MCP",
    subtitle: "Hiểu về Tools, Resources và Prompts",
    type: "grid",
    content: `
      <div class="grid grid-3">
        <div class="card card-premium">
          <div class="card-header font-md text-red">🛠️ 1. Tools (Hành động)</div>
          <p class="font-xs text-muted mt-2">Các hành động hoặc câu lệnh cụ thể mà AI Agent có thể gọi ra để xử lý công việc.</p>
          <div class="mt-3">
            <span class="badge badge-red">search_orders</span>
            <span class="badge badge-red">get_inventory</span>
            <span class="badge badge-red">create_report</span>
            <span class="badge badge-red">send_email_draft</span>
          </div>
          <p class="font-xs mt-3 italic">Ví dụ: AI tự gọi tool "get_inventory" để lấy tồn kho của NOW CoQ10.</p>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md text-red">📄 2. Resources (Dữ liệu)</div>
          <p class="font-xs text-muted mt-2">Các nguồn thông tin, tài liệu hoặc cơ sở dữ liệu mà AI được phép đọc để có ngữ cảnh chính xác.</p>
          <div class="mt-3 font-xs">
            • File Excel doanh số xuất từ Sapo.<br>
            • Tài liệu quy trình (SOP) nội bộ.<br>
            • Danh mục mã sản phẩm (SKU).<br>
            • Lịch sử mua hàng của khách.
          </div>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md text-red">💡 3. Prompts (Mẫu lệnh)</div>
          <p class="font-xs text-muted mt-2">Các khuôn mẫu câu lệnh, biểu mẫu hướng dẫn được thiết kế sẵn để AI hiểu đúng vai trò và định dạng đầu ra.</p>
          <div class="mt-3 font-xs">
            <em>"Mẫu tạo báo cáo reorder hàng ngày: Input [File tồn kho] ➔ Output [Bảng đề xuất SKU cần nhập + lý do]."</em>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 15,
    chapter: "Chương 6",
    title: "ĐẤU NỐI PROVIDER CHO AGENT",
    subtitle: "Thiết lập API Key, Chọn model và Cấu hình an toàn",
    type: "standard",
    content: `
      <div class="concept-section font-sm">
        <div class="flow-horizontal-simple">
          <span>Hermes Agent</span> ➔ <span>API Key (Chìa khóa)</span> ➔ <span>Provider (OpenRouter/OpenAI)</span> ➔ <span>Model AI (Bộ não)</span>
        </div>
        
        <div class="grid grid-2 mt-4">
          <div class="card">
            <div class="card-title text-red">API Key là gì?</div>
            <p class="text-justify font-xs">
              API Key là mật mã định danh tài khoản của doanh nghiệp với nhà cung cấp. Mỗi lần Agent gọi AI xử lý thông tin, hệ thống sẽ tính phí dựa trên API Key này.
            </p>
            <div class="alert-box alert-warning mt-2 font-xs">
              🔥 <strong>Luật an toàn:</strong> Không gửi API key qua Zalo/Telegram nhóm chat. Mỗi Agent chạy thực tế nên dùng 1 API Key riêng biệt có giới hạn hạn mức (Quota) để dễ kiểm soát chi phí.
            </div>
          </div>
          
          <div class="card">
            <div class="card-title text-red">Cách chọn Provider theo nhu cầu</div>
            <ul class="list-styled font-xs">
              <li><strong>Viết content, email, dịch thuật:</strong> Nên dùng OpenAI (GPT-4o) hoặc Anthropic (Claude 3.5 Sonnet) để câu chữ mượt mà nhất.</li>
              <li><strong>Đọc báo cáo/tài liệu rất dài:</strong> Claude 3.5 Sonnet hoặc Gemini Pro (hỗ trợ đọc file siêu khủng).</li>
              <li><strong>Tối ưu chi phí khi chạy tác vụ lặp lại nhiều:</strong> Kết nối qua OpenRouter chọn các model giá rẻ như DeepSeek-Chat hoặc Qwen.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 16,
    chapter: "Chương 7",
    title: "ỨNG DỤNG THỰC CHIẾN TẠI PHÒNG BAN (P.1)",
    subtitle: "Use case cụ thể cho Marketing, E-commerce và SEO",
    type: "grid",
    content: `
      <div class="grid grid-3">
        <div class="card card-premium">
          <div class="card-header font-md text-red">📣 PR / Marketing</div>
          <div class="font-xs mt-2">
            <strong>• Lên Content Calendar:</strong> Lên lịch bài đăng 7 ngày tự động theo nhóm sản phẩm.<br>
            <strong>• Caption đa kênh:</strong> Viết caption chuẩn giọng văn Sport Plus cho Facebook, Shopee.<br>
            <strong>• Kiểm tra claim rủi ro:</strong> Quét bài viết để cảnh báo các từ khóa nhạy cảm dễ bị phạt về thực phẩm bổ sung.
          </div>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md text-red">🛍️ E-commerce</div>
          <div class="font-xs mt-2">
            <strong>• Cảnh báo SKU bất thường:</strong> Phát hiện SKU nào có doanh số sụt giảm hoặc tăng đột biến.<br>
            <strong>• Đề xuất SKU chạy Campaign:</strong> Gợi ý sản phẩm cần đẩy dựa trên tồn kho và tốc độ bán.<br>
            <strong>• Audit Listing sản phẩm:</strong> Quét các gian hàng Shopee, TikTok Shop để tìm listing thiếu từ khóa chuẩn, thiếu mô tả FAQ.
          </div>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md text-red">🌐 Website / SEO</div>
          <div class="font-xs mt-2">
            <strong>• Lên Outline bài Blog:</strong> Lập dàn ý bài viết chuẩn SEO dựa vào keyword đối thủ.<br>
            <strong>• Audit bài viết cũ:</strong> Tìm bài viết thiếu thẻ heading, thiếu link nội bộ (internal link) hoặc thiếu nút mua hàng (CTA).<br>
            <strong>• Tối ưu mô tả (PDP):</strong> Tự viết FAQ schema cho trang sản phẩm.
          </div>
        </div>
      </div>
    `
  },
  {
    id: 17,
    chapter: "Chương 7",
    title: "ỨNG DỤNG THỰC CHIẾN TẠI PHÒNG BAN (P.2)",
    subtitle: "Use case cụ thể cho CSKH, Kế toán và Kho vận",
    type: "grid",
    content: `
      <div class="grid grid-3">
        <div class="card card-premium">
          <div class="card-header font-md text-red">💬 Chăm sóc khách hàng</div>
          <div class="font-xs mt-2">
            <strong>• Gợi ý trả lời nhanh:</strong> Tự động nháp câu trả lời dựa trên kho câu hỏi FAQ nội bộ.<br>
            <strong>• Phân loại inbox tự động:</strong> Tách riêng inbox hỏi giá, bảo hành, khiếu nại chất lượng để nhân sự ưu tiên xử lý.<br>
            <strong>• Tổng hợp ý kiến khách:</strong> Báo cáo các vấn đề khách hàng thường xuyên phàn nàn mỗi tuần.
          </div>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md text-red">📊 Kế toán / Đối soát</div>
          <div class="font-xs mt-2">
            <strong>• Đối chiếu Excel:</strong> Tự động so sánh file đơn hàng của vận chuyển và file thanh toán để tìm ra dòng lệch tiền.<br>
            <strong>• Phân loại giao dịch:</strong> Gom nhóm giao dịch ngân hàng theo nhà cung cấp.<br>
            <strong>• Cảnh báo sai lệch:</strong> Phát hiện hóa đơn sai định dạng, thiếu mã số thuế hoặc chênh lệch công nợ.
          </div>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md text-red">📦 Kho / Inventory</div>
          <div class="font-xs mt-2">
            <strong>• Cảnh báo hết hàng:</strong> AI quét kho và báo SKU sắp cháy hàng trước 14 ngày.<br>
            <strong>• Tính toán Reorder:</strong> Đề xuất số lượng nhập hàng dựa trên tốc độ bán thực tế.<br>
            <strong>• Định vị tồn kho chênh lệch:</strong> Đối chiếu tồn giữa các chi nhánh để gợi ý lệnh điều chuyển hàng tối ưu.
          </div>
        </div>
      </div>
    `
  },
  {
    id: 18,
    chapter: "Chương 8",
    title: "TƯ DUY MVP TRONG TRIỂN KHAI AI",
    subtitle: "Minimum Viable Product — Bắt đầu nhỏ, thắng nhanh chóng",
    type: "standard",
    content: `
      <div class="concept-section font-sm">
        <div class="grid grid-2">
          <div class="card card-warning">
            <div class="card-title text-orange">❌ Cách nghĩ sai (Làm quá lớn ngay từ đầu)</div>
            <p class="font-xs italic">"Tôi muốn xây dựng một hệ thống AI quản lý tự động toàn bộ hàng tồn kho, tự lên đơn đặt hàng và tự đối soát tiền với tất cả nhà cung cấp nước ngoài."</p>
            <p class="mt-2 text-xs">➔ <strong>Hậu quả:</strong> Quy trình quá phức tạp, dữ liệu chưa chuẩn hóa, nhân sự ngợp, tốn nhiều chi phí và rất dễ thất bại giữa chừng.</p>
          </div>
          
          <div class="card card-success">
            <div class="card-title text-green">✅ Cách nghĩ đúng (Tư duy MVP)</div>
            <p class="font-xs italic">"Tôi muốn làm một bản thử nghiệm nhỏ: AI đọc file Excel tồn kho của 1 brand duy nhất là NOW Foods, gửi cảnh báo danh sách 10 SKU sắp hết hàng."</p>
            <p class="mt-2 text-xs">➔ <strong>Kết quả:</strong> Triển khai trong 3 ngày, đo lường được hiệu quả tiết kiệm thời gian ngay lập tức, sau đó mới nhân rộng ra các brand khác.</p>
          </div>
        </div>
        
        <div class="note-box mt-3 text-center">
          🎯 <strong>Nguyên tắc vàng của MVP:</strong> Làm nhỏ ➔ Dùng được thật ➔ Ít rủi ro ➔ Đo được hiệu quả ➔ Cải tiến ➔ Mở rộng.
        </div>
      </div>
    `
  },
  {
    id: 19,
    chapter: "Chương 8",
    title: "SO SÁNH CHI TIẾT: MVP VS BẢN HOÀN CHỈNH",
    subtitle: "Hiểu rõ mục tiêu của từng giai đoạn phát triển",
    type: "standard",
    content: `
      <div class="table-container font-xs">
        <table class="table-premium">
          <thead>
            <tr>
              <th>Tiêu chí</th>
              <th>Phiên bản MVP (Thử nghiệm)</th>
              <th>Phiên bản Hoàn chỉnh (Production)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Mục tiêu chính</strong></td>
              <td>Kiểm chứng xem AI có giúp ích thật sự không</td>
              <td>Vận hành tự động ổn định, lâu dài, quy mô lớn</td>
            </tr>
            <tr>
              <td><strong>Phạm vi dữ liệu</strong></td>
              <td>Nhỏ, hẹp (Ví dụ: 1 nhãn hàng, 1 chi nhánh)</td>
              <td>Toàn bộ hệ thống dữ liệu công ty</td>
            </tr>
            <tr>
              <td><strong>Giao diện người dùng</strong></td>
              <td>Đơn giản (Khung chat Telegram, file Excel xuất ra)</td>
              <td>Dashboard chuyên nghiệp, app nội bộ đẹp mắt</td>
            </tr>
            <tr>
              <td><strong>Phương thức kết nối</strong></td>
              <td>Dùng file mẫu export tay (Đầu vào bán thủ công)</td>
              <td>Đấu nối API trực tiếp, chạy tự động thời gian thực</td>
            </tr>
            <tr>
              <td><strong>Số lượng người dùng</strong></td>
              <td>1 - 3 nhân sự key dùng thử và đánh giá</td>
              <td>Toàn bộ phòng ban hoặc toàn công ty sử dụng</td>
            </tr>
            <tr>
              <td><strong>Thời gian triển khai</strong></td>
              <td>Nhanh (từ 2 đến 5 ngày)</td>
              <td>Vài tuần đến vài tháng</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  {
    id: 20,
    chapter: "Chương 8",
    title: "CÔNG THỨC LỰA CHỌN MVP THÀNH CÔNG",
    subtitle: "Bảng khảo sát 6 câu hỏi tự đánh giá ý tưởng",
    type: "grid",
    content: `
      <div class="grid grid-2 font-sm">
        <div class="card">
          <div class="card-title text-red">6 Yếu tố cấu thành MVP tốt</div>
          <ol class="list-numbered font-xs">
            <li><strong>Tần suất cao:</strong> Công việc lặp đi lặp lại hàng ngày hoặc hàng tuần.</li>
            <li><strong>Đầu vào (Input) rõ ràng:</strong> Dữ liệu có sẵn dưới dạng file Excel chuẩn, email hoặc API.</li>
            <li><strong>Đầu ra (Output) dễ kiểm chứng:</strong> Con người chỉ mất 1-2 phút là biết AI làm đúng hay sai.</li>
            <li><strong>Rủi ro thấp:</strong> Nếu AI làm sai, không gây hậu quả lớn cho khách hàng hay tài chính.</li>
            <li><strong>Tiết kiệm thời gian rõ rệt:</strong> Rút ngắn thời gian làm việc từ vài tiếng xuống vài phút.</li>
            <li><strong>Có Owner rõ ràng:</strong> Có 1 người phụ trách chính chịu trách nhiệm dùng và feedback.</li>
          </ol>
        </div>
        
        <div class="card">
          <div class="card-title text-red">Bảng đánh giá nhanh (Ví dụ: Đối soát Excel)</div>
          <table class="table-mini font-xs">
            <thead>
              <tr>
                <th>Câu hỏi kiểm tra</th>
                <th>Đánh giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Việc này có lặp lại hàng tuần không?</td>
                <td class="text-green font-bold">✓ CÓ (Mỗi tuần)</td>
              </tr>
              <tr>
                <td>Đầu vào có sẵn file Excel sạch không?</td>
                <td class="text-green font-bold">✓ CÓ</td>
              </tr>
              <tr>
                <td>Lỗi AI làm có gây thiệt hại tài chính ngay không?</td>
                <td class="text-green font-bold">✓ KHÔNG (Chỉ tạo nháp báo cáo)</td>
              </tr>
              <tr>
                <td>Có đo được thời gian tiết kiệm không?</td>
                <td class="text-green font-bold">✓ CÓ (Từ 2 tiếng xuống 10 phút)</td>
              </tr>
            </tbody>
          </table>
          <div class="badge-status bg-green mt-3 text-center">Đủ điều kiện làm MVP ngay!</div>
        </div>
      </div>
    `
  },
  {
    id: 21,
    chapter: "Chương 8",
    title: "CODING AGENT LÀM MVP VS GENERAL AGENT VẬN HÀNH MVP",
    subtitle: "Phân vai nhiệm vụ cho các loại AI Agent tại Sport Plus",
    type: "grid",
    content: `
      <div class="grid grid-2 font-sm">
        <div class="card card-dark border-orange">
          <div class="card-header text-orange">🚀 1. Coding Agent làm MVP (Nhà thiết kế)</div>
          <p class="font-xs mt-2">
            Các công cụ như <strong>Claude Code, Codex, Antigravity</strong> dùng để <strong>xây dựng, lập trình ra công cụ MVP</strong>.
          </p>
          <div class="use-case-box mt-3 font-xs">
            <strong>Ví dụ công việc:</strong>
            <ul class="list-dot">
              <li>Viết script Python tự động xử lý file NOW Foods.</li>
              <li>Lập trình ra dashboard hiển thị tồn kho Sapo.</li>
              <li>Viết code kết nối API giữa Sapo và Lark.</li>
            </ul>
            <p class="mt-2 text-muted">👉 Vai trò: Tạo ra công cụ từ con số không.</p>
          </div>
        </div>
        
        <div class="card card-dark border-green">
          <div class="card-header text-green">🤖 2. General Agent vận hành MVP (Nhân viên vận hành)</div>
          <p class="font-xs mt-2">
            Các Agent như <strong>Hermes Agent, OpenClaw</strong> dùng để <strong>vận hành, chạy công cụ MVP</strong> đó định kỳ hàng ngày.
          </p>
          <div class="use-case-box mt-3 font-xs">
            <strong>Ví dụ công việc:</strong>
            <ul class="list-dot">
              <li>Mỗi sáng tự mở tool Sapo và gửi cảnh báo hết hàng qua Telegram cho team Kho.</li>
              <li>Quét kế hoạch Lark và nhắc nhở kế toán upload file đối soát đúng hạn.</li>
              <li>Tự động kích hoạt script audit bài viết SEO hàng tuần.</li>
            </ul>
            <p class="mt-2 text-muted">👉 Vai trò: Chạy lặp lại quy trình đã có sẵn.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 22,
    chapter: "Chương 9",
    title: "GITHUB, REPOSITORY & SKILL NỘI BỘ LÀ GÌ?",
    subtitle: "Xây dựng tài sản và năng lực công nghệ cho Sport Plus",
    type: "standard",
    content: `
      <div class="grid grid-2 font-sm">
        <div class="card">
          <div class="card-title text-red">1. Repo GitHub (Kho lưu trữ)</div>
          <p class="text-justify font-xs">
            <strong>Repository (Repo)</strong> là một thư mục dự án đặt trên GitHub. Nó chứa toàn bộ mã nguồn, tài liệu hướng dẫn, file cấu hình và lịch sử sửa đổi.
          </p>
          <p class="font-xs mt-2">
            Tại Sport Plus, Repo là nơi lưu trữ:
          </p>
          <ul class="list-styled font-xs text-muted">
            <li>Các quy trình SOP dạng số hóa.</li>
            <li>Bộ câu lệnh prompt chuẩn cho từng phòng ban.</li>
            <li>Các script Python xử lý file Excel.</li>
            <li>Tài liệu hướng dẫn kết nối API Sapo.</li>
          </ul>
        </div>
        
        <div class="card">
          <div class="card-title text-red">2. Skill cho Agent (Kỹ năng nghiệp vụ)</div>
          <p class="text-justify font-xs">
            <strong>Skill</strong> là một gói năng lực nhỏ được đóng gói để dạy cho AI thực hiện một nghiệp vụ cụ thể. Skill bao gồm: <em>Bản hướng dẫn chuẩn (SKILL.md) + Code xử lý + Tệp tin mẫu đầu vào/đầu ra.</em>
          </p>
          <div class="code-block font-xs mt-2">
            <strong>Cấu trúc thư mục Skill chuẩn:</strong><br>
            sportplus-ai-skills/<br>
            ├── now-foods-final-file/ (Kỹ năng làm file NOW)<br>
            │   ├── SKILL.md (Hướng dẫn AI chạy)<br>
            │   ├── templates/ (Mẫu Excel)<br>
            │   └── scripts/process.py (Code Python)
          </div>
        </div>
      </div>
    `
  },
  {
    id: 23,
    chapter: "Chương 9",
    title: "CÁCH XÂY DỰNG FILE HƯỚNG DẪN SKILL.MD",
    subtitle: "Để AI Agent đọc vào là có thể làm việc chính xác 100%",
    type: "standard",
    content: `
      <div class="concept-section font-sm">
        <p class="font-xs">
          Một file kỹ năng <strong>SKILL.md</strong> chuẩn dành cho Agent cần trả lời đầy đủ 6 thông tin quan trọng sau:
        </p>
        <div class="grid grid-3 mt-3 font-xs">
          <div class="card">
            <div class="font-bold text-red">1. Purpose (Mục đích)</div>
            Skill này dùng để làm gì? Ai là người sử dụng?<br>
            <em>Ví dụ: Xử lý file báo cáo NOW Foods cho Henry.</em>
          </div>
          <div class="card">
            <div class="font-bold text-red">2. Inputs & Outputs</div>
            Đầu vào gồm những file gì? Đầu ra yêu cầu định dạng thế nào?<br>
            <em>Ví dụ: Input Excel 3 sheet ➔ Output Excel 1 sheet duy nhất.</em>
          </div>
          <div class="card">
            <div class="font-bold text-red">3. Rules (Quy tắc cứng)</div>
            Các quy định AI tuyệt đối phải tuân thủ.<br>
            <em>Ví dụ: Giữ nguyên dòng 1-7, bỏ các dòng có số lượng bằng 0.</em>
          </div>
        </div>
        <div class="grid grid-3 mt-3 font-xs">
          <div class="card">
            <div class="font-bold text-red">4. Validation Checklist</div>
            Danh sách các bước tự kiểm tra lại trước khi báo cáo kết quả.<br>
            <em>Ví dụ: Kiểm tra xem định dạng cột A có bị lệch font không.</em>
          </div>
          <div class="card">
            <div class="font-bold text-red">5. Failure Handling</div>
            Phương án xử lý khi gặp lỗi dữ liệu đầu vào.<br>
            <em>Ví dụ: Nếu thiếu mã SKU, dừng lại báo cáo ngay cho chủ sở hữu.</em>
          </div>
          <div class="card">
            <div class="font-bold text-red">6. Examples (Ví dụ mẫu)</div>
            Cung cấp file mẫu chạy đúng và file lỗi để AI so sánh học hỏi.
          </div>
        </div>
      </div>
    `
  },
  {
    id: 24,
    chapter: "Chương 9",
    title: "AN TOÀN BẢO MẬT & KHÁI NIỆM FORK REPO",
    subtitle: "Những lưu ý sống còn khi làm việc với GitHub",
    type: "grid",
    content: `
      <div class="grid grid-2 font-sm">
        <div class="card card-warning">
          <div class="card-header text-orange">🚫 6 Điều cấm kị khi dùng Repo/Skill ngoài</div>
          <ul class="list-dot font-xs mt-2">
            <li><strong>Không đưa API key thật</strong> vào các kho lưu trữ công khai (Public Repo).</li>
            <li><strong>Không tải file đơn hàng, thông tin khách hàng</strong> lên GitHub công khai.</li>
            <li><strong>Không chạy các file script (.py, .js) lạ</strong> tải từ mạng về máy công ty khi chưa được kỹ thuật kiểm duyệt.</li>
            <li>Không cấp quyền XÓA/GHI ĐÈ dữ liệu cho Agent khi mới chạy thử nghiệm.</li>
            <li>Không dùng chung một API key cho tất cả các Agent của công ty.</li>
          </ul>
        </div>
        
        <div class="card">
          <div class="card-title text-red">💡 Fork Repo là gì?</div>
          <p class="text-justify font-xs">
            <strong>Fork</strong> trên GitHub là hành động tạo ra một <strong>bản sao độc lập</strong> của dự án người khác về tài khoản của mình. 
          </p>
          <div class="comparison-inline mt-2 font-xs">
            <div><strong>Repo gốc:</strong> nousresearch/hermes-agent</div>
            <div>➔ Fork ➔</div>
            <div><strong>Bản của bạn:</strong> sportplus/hermes-agent</div>
          </div>
          <p class="font-xs mt-2 text-justify">
            Bạn có thể tự do chỉnh sửa, thêm tính năng trên bản Fork này mà không ảnh hưởng tới dự án gốc, đồng thời dễ dàng cập nhật code mới từ dự án gốc về bản của mình qua nút <em>Sync Fork</em>.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 25,
    chapter: "Phụ lục A",
    title: "BÀI TẬP 1: PHÂN BIỆT CHATBOT & AGENT",
    subtitle: "Hãy nhấp chọn đáp án đúng để kiểm tra kiến thức của bạn",
    type: "interactive-quiz",
    quizType: "chatbot-vs-agent",
    questions: [
      {
        question: "Soạn thảo email xin lỗi nhà cung cấp nước ngoài vì thanh toán chậm.",
        options: ["Chatbot đủ dùng", "Cần Agent tự hành"],
        correct: 0,
        explanation: "Chỉ cần viết thư dựa trên thông tin có sẵn, Chatbot như ChatGPT làm rất tốt việc này. Không cần kết nối hệ thống phức tạp."
      },
      {
        question: "Mỗi sáng tự lấy dữ liệu từ Sapo, tạo báo cáo doanh thu và gửi vào nhóm Telegram của công ty.",
        options: ["Chatbot đủ dùng", "Cần Agent tự hành"],
        correct: 1,
        explanation: "Việc này đòi hỏi kết nối API, chạy định kỳ hàng ngày và tự động gửi tin nhắn bên ngoài khung chat, bắt buộc phải dùng Agent."
      },
      {
        question: "Viết lại 20 bài mô tả sản phẩm Whey Protein chuẩn SEO dựa trên từ khóa gợi ý.",
        options: ["Chatbot đủ dùng", "Cần Agent tự hành"],
        correct: 0,
        explanation: "Đây là tác vụ sáng tạo nội dung văn bản thuần túy, sử dụng Chatbot là tối ưu nhất."
      },
      {
        question: "Đọc file Excel danh sách đơn hàng, tìm các mã đơn bị lệch số tiền đối soát, xuất ra file Excel mới và gửi email cho kế toán trưởng.",
        options: ["Chatbot đủ dùng", "Cần Agent tự hành"],
        correct: 1,
        explanation: "Quy trình này gồm nhiều bước thao tác file, suy luận so sánh dữ liệu và tự động gửi email, do đó cần Agent xử lý."
      }
    ]
  },
  {
    id: 26,
    chapter: "Phụ lục A",
    title: "BÀI TẬP 2: YÊU CẦU ĐÚNG VS YÊU CẦU SAI CHO AGENT",
    subtitle: "Rèn luyện tư duy viết câu lệnh (Prompt) rõ ràng, chuẩn xác",
    type: "grid",
    content: `
      <div class="grid grid-2 font-sm">
        <div class="card card-warning">
          <div class="card-title text-orange">❌ Ví dụ Yêu cầu mơ hồ (Tệ)</div>
          <div class="prompt-example bg-dark-red">
            "Xem giúp em sản phẩm nào bán chạy nhất nha AI."
          </div>
          <p class="font-xs mt-3">
            <strong>Lý do tệ:</strong>
            - Không nói rõ khoảng thời gian (hôm nay, tháng này, hay năm ngoái?).<br>
            - Không chỉ rõ nguồn dữ liệu lấy từ đâu.<br>
            - Không định nghĩa rõ thế nào là 'bán chạy' (theo doanh thu hay số lượng?).<br>
            - Định dạng đầu ra mong muốn là gì cũng không đề cập.
          </p>
        </div>
        
        <div class="card card-success">
          <div class="card-title text-green">✅ Ví dụ Yêu cầu chuẩn xác (Tốt)</div>
          <div class="prompt-example bg-dark-green">
            "Hãy đọc dữ liệu bán hàng trong 30 ngày gần nhất ở file đính kèm. Hãy lọc các sản phẩm thuộc thương hiệu NOW Foods, tính tổng số lượng bán và sắp xếp giảm dần. Xuất ra cho tôi một bảng gồm các cột: SKU, Tên sản phẩm, Số lượng bán, Tồn kho hiện tại."
          </div>
          <p class="font-xs mt-3">
            <strong>Ưu điểm:</strong>
            Đầy đủ dữ liệu đầu vào, khoảng thời gian cụ thể, thương hiệu cần lọc, công thức sắp xếp và cấu trúc bảng đầu ra rõ ràng.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 27,
    chapter: "Phụ lục B",
    title: "BÀI KIỂM TRA CUỐI KHÓA (10 CÂU HỎI TRẮC NGHIỆM)",
    subtitle: "Nhấp vào câu hỏi để lật mở câu trả lời kỳ vọng",
    type: "interactive-quiz",
    quizType: "flashcard",
    questions: [
      {
        question: "1. LLM là gì?",
        answer: "LLM (Large Language Model) là mô hình ngôn ngữ lớn — bộ não AI hiểu và tạo ra ngôn ngữ tự nhiên. Ví dụ: GPT, Claude, Gemini."
      },
      {
        question: "2. Model khác Provider như thế nào?",
        answer: "Model là phiên bản bộ não cụ thể (GPT-4, Claude 3.5). Provider là nhà cung cấp dịch vụ truy cập model đó (OpenAI, Anthropic, OpenRouter)."
      },
      {
        question: "3. Agent khác chatbot ở điểm nào?",
        answer: "Chatbot chỉ trả lời câu hỏi trong khung chat. Agent có thể tự lên kế hoạch, sử dụng các công cụ bên ngoài (file, API, email) để hoàn thành mục tiêu phức tạp."
      },
      {
        question: "4. CLI dùng để làm gì?",
        answer: "CLI là giao diện dòng lệnh dùng để điều khiển máy tính bằng chữ thay vì click chuột. Giúp Agent thao tác hệ thống cực nhanh."
      },
      {
        question: "5. MCP giúp AI kết nối với cái gì?",
        answer: "MCP là giao thức chuẩn hóa giúp AI kết nối trực tiếp với dữ liệu và công cụ bên ngoài như Sapo, Lark, Google Sheet, file Excel..."
      },
      {
        question: "6. Có được gửi API Key vào group chat chung không?",
        answer: "Tuyệt đối KHÔNG. API Key giống như mật khẩu thẻ thanh toán ngân hàng, nếu lộ sẽ bị người khác dùng trộm gây phát sinh chi phí lớn."
      },
      {
        question: "7. Khi nào Agent được phép tự gửi email hàng loạt?",
        answer: "Chỉ khi quy trình đã chạy thử ổn định (Read-only và tạo bản nháp thành công) và được quản lý phê duyệt cấp quyền."
      },
      {
        question: "8. Nên bắt đầu bằng quyền Đọc (Read-only) hay tự sửa dữ liệu trước?",
        answer: "Nên bắt đầu bằng quyền Đọc (Read-only). Đây là cấp độ an toàn nhất để kiểm nghiệm xem AI hoạt động chính xác hay không trước khi cho sửa dữ liệu."
      },
      {
        question: "9. Nếu Agent làm sai dữ liệu gây lỗi, ai chịu trách nhiệm?",
        answer: "Chính là Owner (người đăng ký và chịu trách nhiệm vận hành Agent đó tại Sport Plus)."
      },
      {
        question: "10. Một Agent đăng ký vận hành nội bộ cần những thông tin gì?",
        answer: "Gồm 6 thông tin bắt buộc: Tên Agent, Owner, Mô tả mục tiêu, Dữ liệu đầu vào (Input), Đầu ra (Output) và Cấp độ quyền được cấp."
      }
    ]
  },
  {
    id: 28,
    chapter: "Phụ lục C",
    title: "KHUNG KIỂM SOÁT AGENT NỘI BỘ SPORT PLUS",
    subtitle: "Bảo đảm an toàn, rõ ràng trách nhiệm khi ứng dụng AI",
    type: "grid",
    content: `
      <div class="grid grid-3 font-sm">
        <div class="card card-premium">
          <div class="card-header font-md text-red">📋 6 Trường thông tin bắt buộc</div>
          <ol class="list-numbered font-xs mt-2">
            <li><strong>Tên Agent:</strong> Định danh rõ ràng.</li>
            <li><strong>Owner:</strong> Nhân sự chịu trách nhiệm chính.</li>
            <li><strong>Mục tiêu:</strong> Công việc Agent cần giải quyết.</li>
            <li><strong>Input:</strong> Các file dữ liệu đầu vào.</li>
            <li><strong>Output:</strong> Định dạng file/báo cáo đầu ra.</li>
            <li><strong>Quyền hạn:</strong> Cấp độ quyền được sử dụng.</li>
          </ol>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md text-red">🔑 3 Cấp độ phân quyền</div>
          <ul class="list-styled font-xs mt-2">
            <li><strong>Level 1 — Read-only (Đọc dữ liệu):</strong> Chỉ đọc dữ liệu để phân tích (Ví dụ: đọc kho, đọc báo cáo bán hàng). Cực kỳ an toàn.</li>
            <li><strong>Level 2 — Draft Action (Tạo bản nháp):</strong> AI soạn sẵn email/tin nhắn/campaign nháp, con người duyệt mới gửi đi.</li>
            <li><strong>Level 3 — Execute Action (Tự vận hành):</strong> AI tự chạy gửi báo cáo định kỳ hoặc tự bắn task tự động.</li>
          </ul>
        </div>
        
        <div class="card card-premium">
          <div class="card-header font-md text-red">💡 Quy tắc vàng vận hành</div>
          <ul class="list-styled font-xs mt-2">
            <li>Không cấp quyền cao hơn mức cần thiết.</li>
            <li>Bắt buộc có người kiểm duyệt các hành động sửa/xóa dữ liệu.</li>
            <li>Học cách kiểm soát chi phí API hàng tuần.</li>
            <li>Mọi lỗi sai của AI đều được quy về trách nhiệm của Owner để cải tiến quy trình.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    id: 29,
    chapter: "Lộ trình",
    title: "LỘ TRÌNH 4 GIAI ĐOẠN TRIỂN KHAI AI TẠI SPORT PLUS",
    subtitle: "Từng bước chuyển đổi số thông minh và bền vững",
    type: "standard",
    content: `
      <div class="roadmap-container font-sm">
        <div class="roadmap-step">
          <div class="roadmap-badge bg-red">GĐ 1</div>
          <div class="roadmap-content">
            <span class="roadmap-title text-red">ĐÀO TẠO NHẬN THỨC (Tuần 1-2)</span>
            <p class="font-xs mt-1">
              Toàn bộ leader và nhân sự hiểu đúng khái niệm AI/Agent. Mỗi phòng ban đề xuất 3 ý tưởng sử dụng AI thông qua Form đăng ký MVP.
            </p>
          </div>
        </div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step">
          <div class="roadmap-badge bg-orange">GĐ 2</div>
          <div class="roadmap-content">
            <span class="roadmap-title text-orange">CHẠY THỬ AGENT ĐỌC DỮ LIỆU (Tuần 3-6)</span>
            <p class="font-xs mt-1">
              Triển khai các Agent ở Level 1 (Read-only). Ví dụ: Quét báo cáo tồn kho hàng tuần, đối chiếu file lệch tiền Excel kế toán. Đạt độ chính xác ≥ 90%.
            </p>
          </div>
        </div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step">
          <div class="roadmap-badge bg-yellow">GĐ 3</div>
          <div class="roadmap-content">
            <span class="roadmap-title text-yellow">TÍCH HỢP TẠO BẢN NHÁP (Tuần 7-14)</span>
            <p class="font-xs mt-1">
              Nâng cấp lên Level 2 (Draft Action). AI tự động soạn thảo sẵn caption bài đăng, email gửi đối tác hoặc nháp listing Shopee để nhân sự duyệt và bấm đăng.
            </p>
          </div>
        </div>
        <div class="roadmap-arrow">↓</div>
        <div class="roadmap-step">
          <div class="roadmap-badge bg-green">GĐ 4</div>
          <div class="roadmap-content">
            <span class="roadmap-title text-green">TỰ ĐỘNG HÓA HOÀN TOÀN (Từ tuần 15)</span>
            <p class="font-xs mt-1">
              Triển khai Level 3 (Execute) cho các quy trình đã vận hành mượt mà ở GĐ 3 từ 4-8 tuần. AI tự động gửi báo cáo mỗi sáng, tự động cảnh báo tồn kho.
            </p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 30,
    chapter: "Thông điệp chốt",
    title: "THÔNG ĐIỆP CHỐT CHO TOÀN ĐỘI NGŨ SPORT PLUS",
    subtitle: "Tập trung vào hiệu quả vận hành thực chất",
    type: "cover",
    theme: "red",
    content: `
      <div class="cover-container">
        <img src="logo.jpg" alt="Sport Plus Logo" class="cover-logo">
        <h2 class="closing-message-title">“AI KHÔNG THAY THẾ CON NGƯỜI.<br>NHƯNG NGƯỜI BIẾT DÙNG AI SẼ THAY THẾ NGƯỜI KHÔNG BIẾT DÙNG.”</h2>
        
        <div class="grid grid-2 mt-4 font-sm text-left">
          <div class="card card-dark opacity-90">
            <div class="card-title text-red">ChatGPT & Chatbot</div>
            <p class="font-xs">Giúp chúng ta tư duy logic hơn, viết lách tốt hơn, tóm tắt thông tin nhanh hơn.</p>
          </div>
          <div class="card card-dark opacity-90">
            <div class="card-title text-red">AI Agent & Automation</div>
            <p class="font-xs">Giúp chúng ta giải quyết các công việc lặp đi lặp lại hàng ngày một cách tự động, chính xác.</p>
          </div>
        </div>
        
        <p class="mt-4 font-bold max-w-md mx-auto text-center font-sm">
          Tại Sport Plus, mục tiêu dùng AI không phải để theo trào lưu, mà nhằm giảm thiểu lỗi vận hành, tiết kiệm thời gian, tăng tốc marketing và nâng tầm năng lực cho từng nhân sự!
        </p>
      </div>
    `
  }
];
