🔔 Toast Notification Web App
This is a simple, responsive Toast Notification system built with HTML, CSS, and JavaScript. It displays stylish notifications (Success, Error, Invalid) that slide in and disappear automatically after 6 seconds.

🌐 Demo
Click the buttons to generate different types of toast messages:

✅ Success

❌ Error

⚠️ Invalid



📁 Project Structure
bash
Copy
Edit
📦 Toast Notification
├── index.html       # Main HTML page
├── style.css        # Styling for the page and toast
├── script.js        # JavaScript to handle dynamic toasts
└── README.md        # Project documentation
🧠 Features
🎉 Animated toast notifications

⏱️ Auto-remove after 6 seconds

✅ Success, ❌ Error, ⚠️ Invalid notification types

🧩 FontAwesome icons support

📱 Mobile responsive

🛠️ Tech Stack
HTML5

CSS3 (with animations and flexbox)

JavaScript (Vanilla)

FontAwesome (for icons)

🚀 How to Use
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/toast-notification-app.git
Open index.html in your browser:

bash
Copy
Edit
cd toast-notification-app
open index.html
Click the buttons to trigger toasts.

🧩 How It Works
When a button is clicked, a toast is created using createToast() in script.js.

Based on the message type, a CSS class (success, error, invalid) is added.

Each toast slides in with a keyframe animation and has a progress bar.

After 6 seconds, the toast is automatically removed.

📌 Customization
🎨 Change colors by modifying .toast, .toast.error, .toast.invalid in style.css.

⏱️ Adjust the time by modifying the setTimeout and @keyframes anim duration (default: 6000ms).

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
Icons by Font Awesome

Inspired by modern toast UI/UX designs
