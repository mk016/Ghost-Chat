# Ghost Chat App

![ghost-chat](https://github.com/user-attachments/assets/47b1d863-4d1e-4ef7-a8bf-fb297f4cccaa)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![PNPM](https://img.shields.io/badge/pnpm-8%2B-orange)](https://pnpm.io/)

<!-- Replace with actual banner image -->


**Real-time ghost chat rooms** for instant collaboration with privacy-first design. No signups, no tracking – just seamless communication.  
🌐 Live Demo: [https://ghost-chat.vercel.app](https://ghost-chat.vercel.app)

---

## ✨ Features
- **🚀 Instant Rooms**: Create/join rooms in 2 clicks  
- **🔒 Privacy First**: End-to-end encrypted messages  
- **🕵️‍♂️ Anonymous**: No personal data collected
- **👻 Ghost Mode**: Disappear without a trace
- **🚀 Real-Time Messaging**: WebSocket-powered live updates  
- **🔒 SSL Encryption**: Secured conversations with SSL/TLS encryption  
- **📅 Message History**: Scroll through past chats  
- **🕹 Custom Controls**: Set user limits & room expiration  
- **📤 File Sharing**: AWS S3 + CloudFront CDN integration  
- **🔑 OAuth Login**: Google/GitHub authentication  

---

## 🛠 Tech Stack

**Frontend**  
![Next.js](https://img.shields.io/badge/Next.js-15.0%2B-000000?logo=next.js)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3%2B-06B6D4?logo=tailwind-css)
![Turborepo](https://img.shields.io/badge/Turborepo-1.10%2B-EF4444?logo=turborepo)

**Backend**  
![Express.js](https://img.shields.io/badge/Express.js-4.18%2B-000000?logo=express)
![Prisma](https://img.shields.io/badge/Prisma-5.5%2B-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16%2B-4169E1?logo=postgresql)

**Infra**  
![AWS](https://img.shields.io/badge/AWS-EC2%2FS3-FF9900?logo=amazon-aws)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?logo=vercel)
![Nginx](https://img.shields.io/badge/Nginx-1.25%2B-009639?logo=nginx)

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- PNPM v8+
- PostgreSQL & Redis
- AWS CLI configured

```bash
# 1. Clone repository
git clone https://github.com/mk016/ghost-chat-app.git
cd ghost-chat-app

# 2. Install dependencies
pnpm install

# 3. Configure environment
# ========================
# Frontend: Copy .env.example to .env and update values as needed
# Backend: Copy apps/server/.env.example to apps/server/.env and update values as needed

# 4. Run database migrations
npx prisma migrate dev

# 5. Start development servers
pnpm dev
```

## 📧 Contact

- **Email**: ghost-chat@protonmail.com
- **GitHub**: [@mk016](https://github.com/mk016)
- **Discord**: [Ghost Chat Community](https://discord.gg/ghost-chat)
- **Twitter**: [@Mk__0168](https://x.com/Mk__0168)

## 🙋‍♂️ Contributing

We welcome contributions from the community! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you find this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation

## 🔒 Privacy

Ghost Chat is built with privacy in mind:
- No user data collection
- End-to-end encryption
- Anonymous by default
- Open source for transparency

---

**Made with ❤️ by the Ghost Chat Team**
