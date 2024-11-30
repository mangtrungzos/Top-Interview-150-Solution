# Pointer
- Là một biến đặc biệt lưu trữ địa chỉ bộ nhớ của biến khác
- Thay vì lưu giá trị trực tiếp | Pointer lưu vị trí nơi giá trị đó được lưu trong bộ nhớ
- Tiết kiệm bô nhớ: pointer làm việc với cấu trúc dữ liệu không cần sao chép
- pointer can change data in functions without returning a value

# How to recognize complex problems O(n)
- Duyệt qua toàn bộ dữ liệu một lần duy nhất: Nếu bài toán yêu cầu duyệt qua từng phần tử của một mảng hoặc danh sách một lần từ đầu đến cuối, có thể đó là bài toán
  𝑂(𝑛).
- Sử dụng một vòng lặp duy nhất không lồng nhau: Khi chỉ có một vòng lặp duy nhất chạy từ đầu đến cuối của tập dữ liệu (thường là từ 0 đến n-1).