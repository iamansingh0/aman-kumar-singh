import location from "../img/location.png"
import email from "../img/email.png"
import cats from "../img/cats.png"
import fundme from "../img/fundme.png"
import smoke from "../img/smoke.jpg"
import qrcode from "../img/qrcode.png"
import notes from "../img/notes.png"
import organ from "../img/org.png"
import calc from "../img/calc.png"
import cli from "../img/cli.png"

export const blogs = [
	{
		id: 1,
		title: "How to Set up a Cool Looking Github Profile",
		date: "Dec 17, 2022",
		time: "3 min read",
		brief: "A platform for collaboration and version control is called GitHub. It enables remote collaboration on projects between you and other people. This blog guides you to Make a Cool Looking Overview Tab for your Github Account. This profile page shows information about the profile owner, work, skills...",
		image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1671277988264/OrwfkIOTE.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		link: "https://amankumar1.hashnode.dev/how-to-set-up-a-cool-looking-github-profile",
	},
	{
		id: 2,
		title: "How to Set up a Cool Looking Github Profile",
		date: "Dec 17, 2022",
		time: "3 min read",
		brief: "A platform for collaboration and version control is called GitHub. It enables remote collaboration on projects between you and other people. This blog guides you to Make a Cool Looking Overview Tab for your Github Account. This profile page shows information about the profile owner, work, skills...",
		image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1671277988264/OrwfkIOTE.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		link: "https://amankumar1.hashnode.dev/how-to-set-up-a-cool-looking-github-profile",
	},
	{
		id: 3,
		title: "How to Set up a Cool Looking Github Profile",
		date: "Dec 17, 2022",
		time: "3 min read",
		brief: "A platform for collaboration and version control is called GitHub. It enables remote collaboration on projects between you and other people. This blog guides you to Make a Cool Looking Overview Tab for your Github Account. This profile page shows information about the profile owner, work, skills...",
		image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1671277988264/OrwfkIOTE.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		link: "https://amankumar1.hashnode.dev/how-to-set-up-a-cool-looking-github-profile",
	},
	{
		id: 4,
		title: "How to Set up a Cool Looking Github Profile",
		date: "Dec 17, 2022",
		time: "3 min read",
		brief: "A platform for collaboration and version control is called GitHub. It enables remote collaboration on projects between you and other people. This blog guides you to Make a Cool Looking Overview Tab for your Github Account. This profile page shows information about the profile owner, work, skills...",
		image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1671277988264/OrwfkIOTE.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		link: "https://amankumar1.hashnode.dev/how-to-set-up-a-cool-looking-github-profile",
	},
	{
		id: 5,
		title: "How to Set up a Cool Looking Github Profile",
		date: "Dec 17, 2022",
		time: "3 min read",
		brief: "A platform for collaboration and version control is called GitHub. It enables remote collaboration on projects between you and other people. This blog guides you to Make a Cool Looking Overview Tab for your Github Account. This profile page shows information about the profile owner, work, skills...",
		image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1671277988264/OrwfkIOTE.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		link: "https://amankumar1.hashnode.dev/how-to-set-up-a-cool-looking-github-profile",
	},
]

export const socialLinks = [
	{
		id: 1,
		href: "https://www.instagram.com/iaman._1/",
		icon: "fab fa-instagram",
	},
	{ id: 2, href: "https://twitter.com/dank_aman", icon: "fab fa-twitter" },
	{ id: 3, href: "https://github.com/iamansingh0", icon: "fab fa-github" },
	{
		id: 4,
		href: "https://www.linkedin.com/in/aman-kumar-singh-08b2b220b/",
		icon: "fab fa-linkedin",
	},
]

export const contactLinks = [
	{
		id: 1,
		title: "Email",
		data: "amankumar7355197337@gmail.com",
		photo: email,
	},
	{ id: 2, title: "Location", data: "Lucknow, India", photo: location },
]

export const contactDevSocialLinks = [
	{
		id: 1,
		title: "Social Links",
		icons: [
			{
				id: 1,
				href: "https://leetcode.com/amankumar7355197337/",
				icon: "fab fa-instagram",
			},
			{
				id: 2,
				href: "https://twitter.com/dank_aman",
				icon: "fab fa-twitter",
			},
			{
				id: 3,
				href: "https://github.com/iamansingh0",
				icon: "fab fa-github",
			},
			{
				id: 4,
				href: "https://www.linkedin.com/in/aman-kumar-singh-08b2b220b/",
				icon: "fab fa-linkedin",
			},
		],
	},
]

export const projects = [
	{
		id: 1,
		title: "cute cats",
		img: cats,
		tech: ["ReactJS, Fetch-API, CSS"],
		github: "https://github.com/iamansingh0/cute-cats",
		url: "https://cute-cats-beige.vercel.app/",
		desc: "The random cute cat images are being displayed by fetching the cats from cats api.",
	},
	{
		id: 2,
		title: "Smoke Plumes Detection",
		img: smoke,
		tech: ["Python, TensorFlow, Data science"],
		github: "",
		url: "",
		desc: "The website leverages the power of machine learning and deep learning techniques, specifically ResNet and U-Net, for smoke plume detection in satellite imagery. ResNet is utilized for accurate classification. U-Net, on the other hand, performs precise segmentation by outlining and identifying the boundaries of smoke plumes at a pixel level.",
	},
	{
		id: 3,
		title: "fund me DAO",
		img: fundme,
		tech: ["Solidity", "EthersJS", "Javascript"],
		github: "https://github.com/iamansingh0/frontend-fundMe",
		url: "https://iamansingh0.github.io/frontend-fundMe/",
		desc: "The solidity website is a decentralized application (DApp) developed using the Solidity programming language. It is designed to connect seamlessly with users cryptocurrency wallets, providing a secure and user-friendly interface for collecting funds.",
	},
	{
		id: 4,
		title: "QRcode Generator",
		img: qrcode,
		tech: ["JS", "CSS", "HTML"],
		github: "https://github.com/iamansingh0/QRcode-Generator-QRious",
		url: "https://qrcode-aman.vercel.app/",
		desc: "The website is a QR code generator built using JavaScript, HTML, and CSS. It utilizes the qrious library to generate QR codes based on linked URLs or data input. Users can input a website URL or custom data, and the website will generate a QR code that represents the provided information.",
	},
	{
		id: 5,
		title: "Notes Managaer",
		img: notes,
		tech: ["ReactJS, CSS"],
		github: "https://github.com/iamansingh0/notesManager",
		url: "https://notes-manager-zeta.vercel.app/",
		desc: "The website is a note-taking application built using React. It utilizes the browser's local session storage to store and manage notes. With this website, users can create and delete notes.",
	},
	{
		id: 6,
		title: "Organ Transplatation System",
		img: organ,
		tech: ["HTML", "CSS", "Web3", "Metamask", "Solidity", "Python", "ML"],
		github: "https://github.com/iamansingh0/Blockchain-Based-Organ-Transplantation-System",
		url: "https://github.com/iamansingh0/Blockchain-Based-Organ-Transplantation-System",
		desc: "The organ transplantation system combines the use of Solidity, a programming language for smart contracts on the Ethereum blockchain, with Machine Learning (ML) algorithms for receiver-donor matching. This system aims to facilitate and optimize the process of organ donation and transplantation.",
	},
	{
		id: 7,
		title: "Simple JS Calculator",
		img: calc,
		tech: ["HTML", "CSS", "JS"],
		github: "https://github.com/iamansingh0/simple_calculator_js",
		url: "https://calcjs-one.vercel.app/",
		desc: "This JavaScript Calculator is a web-based application that enables users to perform basic arithmetic operations. It features a user-friendly interface with numeric and operator buttons.",
	},
	{
		id: 8,
		title: "npm aman package",
		img: cli,
		tech: ["JS", "Api-Fetch", "Axios-react"],
		github: "https://github.com/iamansingh0/aman-cli",
		url: "https://github.com/iamansingh0/aman-cli",
		desc: "It is a cli based project, made using javascript with the help of different APIs to fetch data and display in the command line.",
	},
]
