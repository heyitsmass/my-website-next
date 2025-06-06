'use client';
import CompanyCarousel from '@/components/CompanyCarousel';
import Loading from '@/components/Loader';
import {
    ArrowRight,
    Code,
    Github,
    Linkedin,
    Mail,
    Menu,
    Palette,
    Users,
    X,
    Zap
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import './globals.css';

export default function Home() {
	const [scrollY, setScrollY] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	//const [activeSection, setActiveSection] = useState("hero");
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [windowHeight, setWindowHeight] = useState(0);
	const heroRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		const handleMouseMove = (e: React.MouseEvent | globalThis.MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		const handleResize = () => setWindowHeight(window.innerHeight);

		// Initialize window height
		setWindowHeight(window.innerHeight);

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const scrollToSection = (sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
		setIsMenuOpen(false);
	};

	const projects = [
		{
			title: 'Product Mapping Service',
			category: 'E-commerce Integrations',
			description:
				'Complete redesign backend product mapping service decreasing system resources by 40%, Sync times by 96% and optimized data mapping by 80%',
			image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
			tags: ['Backend', 'API', 'Shopify', 'Integrations'],
		},
		{
			title: 'SaaS Training Platform',
			category: 'Web Application',
			description:
				'Enterprise dashboard with complex data visualization and workflow optimization to monitor and efficiently manage internal employee training',
			image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
			tags: ['SaaS', 'Data Visualization', 'Analytics', 'Enterprise'],
		},
		{
			title: 'Interface Redesign',
			category: 'Web Design',
			description:
				'Comprehensive design, optimization and implementation of user-facing elements optimizing FCP by 60%, User Engagement by 30% and User Retention by 15%',
			image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=500&h=300&fit=crop',
			tags: ['Design System', 'Components', 'Responsivity'],
		},
		{
			title: 'Systems Design',
			category: 'Architecture',
			description:
				'Complete system redesign optimizing frontend interfaces, backend database writes and simple migrations reducing downtime maintenance requirements by 40%',
			image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
			tags: ['Architecture', 'Design', 'Research'],
		},
	];

	const skills = [
		{ name: 'Figma', category: 'Design Tools', level: 95 },
		{ name: 'Backend | Frontend | DevOps', category: 'Architecture', level: 100 },
		{ name: 'Prototyping', category: 'Design Process', level: 92 },
		{ name: 'User Research', category: 'UX Methods', level: 88 },
		{ name: 'Design Systems', category: 'Design Process', level: 94 },
		{ name: 'React | HTML | CSS', category: 'Development', level: 85 },
	];

	return (
		<div className="bg-zinc-950 text-zinc-100 min-h-screen overflow-x-hidden">
			{/* Cursor Gradient Effect */}
			<div
				className="fixed inset-0 pointer-events-none z-50"
				style={{
					background: `radial-gradient(400px circle at ${mousePosition.x}px ${
						mousePosition.y
					}px, 
            rgba(${99 + Math.sin(mousePosition.x * 0.01) * 30}, ${
						102 + Math.cos(mousePosition.y * 0.01) * 40
					}, ${241 + Math.sin((mousePosition.x + mousePosition.y) * 0.005) * 20}, 0.08), 
            rgba(${79 + Math.cos(mousePosition.x * 0.008) * 25}, ${
						70 + Math.sin(mousePosition.y * 0.008) * 35
					}, ${
						229 + Math.cos((mousePosition.x - mousePosition.y) * 0.006) * 25
					}, 0.05) 40%, 
            transparent 70%)`,
				}}
			/>

			{/* Navigation */}
			<nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/50">
				<div className="max-w-7xl mx-auto px-6 py-4">
					<div className="flex justify-between items-center">
						<div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
							BC
						</div>

						<div className="hidden md:flex space-x-8">
							{['About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item.toLowerCase())}
									className="text-zinc-300 hover:text-indigo-400 transition-colors duration-300 relative group"
								>
									{item}
									<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full" />
								</button>
							))}
						</div>

						<button
							className="md:hidden text-zinc-300"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800/50">
						<div className="px-6 py-4 space-y-4">
							{['About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item.toLowerCase())}
									className="block text-zinc-300 hover:text-indigo-400 transition-colors duration-300"
								>
									{item}
								</button>
							))}
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section
				id="hero"
				ref={heroRef}
				className="relative min-h-screen flex items-center justify-center overflow-hidden"
			>
				{/* Background Elements with Enhanced Multi-layer Parallax */}
				<div className="absolute inset-0">
					{/* Layer 1 - Ultra Slow (Background) */}
					<div
						className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-purple-600/25 rounded-full blur-3xl"
						style={{
							transform: `translate3d(${scrollY * 0.05}px, ${
								scrollY * 0.08
							}px, 0) scale(${1 + scrollY * 0.0005})`,
							opacity: Math.max(0.3, 1 - scrollY / windowHeight),
						}}
					/>

					{/* Layer 2 - Slow */}
					<div
						className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-br from-blue-500/25 to-indigo-600/20 rounded-full blur-3xl"
						style={{
							transform: `translate3d(${-scrollY * 0.1}px, ${
								scrollY * 0.15
							}px, 0) rotate(${scrollY * 0.1}deg)`,
							opacity: Math.max(0.2, 1 - scrollY / windowHeight),
						}}
					/>

					{/* Layer 3 - Medium */}
					<div
						className="absolute bottom-40 left-1/3 w-64 h-64 bg-gradient-to-br from-indigo-400/35 to-blue-500/30 rounded-full blur-2xl"
						style={{
							transform: `translate3d(${scrollY * 0.2}px, ${
								-scrollY * 0.25
							}px, 0) scale(${1 - scrollY * 0.0008})`,
							opacity: Math.max(0.1, 1 - scrollY / (windowHeight * 0.8)),
						}}
					/>

					{/* Layer 4 - Fast (Foreground) */}
					<div
						className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-indigo-500/25 rounded-full blur-xl"
						style={{
							transform: `translate3d(${-scrollY * 0.3}px, ${
								scrollY * 0.4
							}px, 0) rotate(${-scrollY * 0.2}deg)`,
							opacity: Math.max(0.1, 1 - scrollY / (windowHeight * 0.6)),
						}}
					/>

					{/* Enhanced Geometric Shapes with Complex Movement */}
					<div
						className="absolute top-1/4 left-1/4 w-6 h-6 bg-indigo-400/70 rotate-45"
						style={{
							transform: `translate3d(${Math.sin(scrollY * 0.01) * 20}px, ${
								scrollY * 0.2
							}px, 0) rotate(${45 + scrollY * 0.3}deg)`,
							opacity: Math.max(0.2, 1 - scrollY / (windowHeight * 0.7)),
						}}
					/>
					<div
						className="absolute top-2/3 right-1/3 w-8 h-8 border-2 border-indigo-300/50 rotate-45"
						style={{
							transform: `translate3d(${-Math.cos(scrollY * 0.008) * 30}px, ${
								scrollY * 0.35
							}px, 0) rotate(${45 - scrollY * 0.25}deg)`,
							opacity: Math.max(0.2, 1 - scrollY / (windowHeight * 0.5)),
						}}
					/>
					<div
						className="absolute top-1/2 left-2/3 w-4 h-4 bg-purple-400/60 rounded-full"
						style={{
							transform: `translate3d(${Math.sin(scrollY * 0.012) * 40}px, ${
								-scrollY * 0.3
							}px, 0) scale(${1 + Math.sin(scrollY * 0.01) * 0.3})`,
							opacity: Math.max(0.3, 1 - scrollY / (windowHeight * 0.8)),
						}}
					/>

					{/* Additional Floating Elements */}
					<div
						className="absolute top-12 right-12 w-2 h-2 bg-indigo-300/80 rounded-full"
						style={{
							transform: `translate3d(${scrollY * 0.15}px, ${scrollY * 0.1}px, 0)`,
							opacity: Math.max(0.4, 1 - scrollY / windowHeight),
						}}
					/>
					<div
						className="absolute bottom-20 right-1/4 w-3 h-3 bg-blue-400/60 rounded-full"
						style={{
							transform: `translate3d(${-scrollY * 0.18}px, ${scrollY * 0.12}px, 0)`,
							opacity: Math.max(0.3, 1 - scrollY / (windowHeight * 0.9)),
						}}
					/>
				</div>

				<div className="relative z-10 text-center max-w-5xl mx-auto px-6 flex flex-col items-center">
					<div
						className="mb-8"
						style={{
							transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
							opacity: Math.max(0, 1 - scrollY / (windowHeight * 0.8)),
						}}
					>
						<h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
							<span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-indigo-500 bg-clip-text text-transparent">
								Brandon Cannon
							</span>
						</h1>
						<h2 className="text-2xl md:text-3xl text-zinc-300 mb-6 font-light">
							Full Stack Engineer / Web UI & UX Designer
						</h2>
						<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
							Crafting digital experiences that bridge user needs with business goals
							through
							<span className="text-indigo-400"> human-centered design</span>
						</p>
					</div>

					<div
						className="grid grid-cols-2 grid-rows-2 sm:flex-row gap-6 items-center *:w-max *:justify-center w-max"
						style={{
							transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
							opacity: Math.max(0, 1 - scrollY / (windowHeight * 0.9)),
						}}
					>
						<button
							onClick={() => scrollToSection('portfolio')}
							className="justify-self-end group bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center gap-3"
						>
							View My Work
							<ArrowRight
								size={20}
								className="group-hover:translate-x-1 transition-transform duration-300"
							/>
						</button>
						<button
							onClick={() => scrollToSection('contact')}
							className="!w-full justify-self-start  group border-2 border-zinc-700 hover:border-indigo-400 text-zinc-300 hover:text-indigo-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
						>
							Get In Touch
						</button>
						<a
							className="group col-span-full justify-self-center"
							href="https://github.com/massive-development"
							target="_blank"
							rel="noopener noreferrer"
						>
							<button className="justify-self-center col-span-full !w-full group bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25 flex items-center gap-3">
								Massive Development
								{<Loading className="w-6" />}
							</button>
						</a>
					</div>
				</div>

				<div
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
					style={{
						opacity: Math.max(0, 1 - scrollY / (windowHeight * 0.5)),
					}}
				>
					<div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-pulse" />
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 relative">
				<div className="max-w-7xl mx-auto px-6">
					<div
						className="text-center mb-16"
						style={{
							transform: `translate3d(0, ${Math.max(
								0,
								(scrollY - windowHeight * 0.6) * 0.2
							)}px, 0)`,
							opacity:
								scrollY > windowHeight * 0.4
									? Math.min(
											1,
											(scrollY - windowHeight * 0.4) / (windowHeight * 0.3)
									  )
									: 0,
						}}
					>
						<h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent">
							About Me
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 mx-auto mb-8" />
					</div>

					<div className="grid md:grid-rows-2 gap-16 items-center">
						<div
							className="space-y-6"
							style={{
								transform: `translate3d(${Math.max(
									0,
									(scrollY - windowHeight * 0.8) * -0.1
								)}px, ${Math.max(0, (scrollY - windowHeight * 0.8) * 0.15)}px, 0)`,
								opacity:
									scrollY > windowHeight * 0.6
										? Math.min(
												1,
												(scrollY - windowHeight * 0.6) /
													(windowHeight * 0.4)
										  )
										: 0,
							}}
						>
							<div className="bg-zinc-900/50 backdrop-blur border border-zinc-800/50 p-8 rounded-lg">
								<h3 className="text-2xl font-semibold mb-4 text-indigo-300">
									Design Philosophy
								</h3>
								<p className="text-zinc-300 leading-relaxed mb-4">
									I believe great design is invisible – it solves problems so
									elegantly that users don't even notice it's there. My approach
									combines analytical thinking with creative problem-solving to
									create experiences that are both beautiful and functional.
								</p>
								<p className="text-zinc-300 leading-relaxed">
									With 6+ years in the industry, I've helped startups and Fortune
									500 companies increase user engagement by an average of 40%
									through strategic UX improvements.
								</p>
							</div>
						</div>

						<div
							className="grid grid-cols-2 gap-6"
							style={{
								transform: `translate3d(${Math.max(
									0,
									(scrollY - windowHeight * 1.0) * 0.1
								)}px, ${Math.max(0, (scrollY - windowHeight * 1.0) * 0.08)}px, 0)`,
								opacity:
									scrollY > windowHeight * 0.8
										? Math.min(
												1,
												(scrollY - windowHeight * 0.8) /
													(windowHeight * 0.3)
										  )
										: 0,
							}}
						>
							{[
								{ icon: Users, label: '50+', desc: 'Projects Delivered' },
								{ icon: Zap, label: '40%', desc: 'Avg. Engagement Boost' },
								{ icon: Palette, label: '6+', desc: 'Years Experience' },
								{ icon: Code, label: '15+', desc: 'Design Systems' },
							].map((stat, index) => (
								<div
									key={stat.desc}
									className="bg-zinc-900/30 backdrop-blur border border-zinc-800/30 p-6 rounded-lg text-center group hover:bg-zinc-800/30 transition-all duration-300"
									style={{
										transform: `translate3d(0, ${Math.max(
											0,
											(scrollY - windowHeight * 1.1 - index * 100) * 0.05
										)}px, 0)`,
										transitionDelay: `${index * 100}ms`,
									}}
								>
									<stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
									<h4 className="font-semibold mb-2">{stat.label}</h4>
									<p className="text-zinc-400 text-sm">{stat.desc}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Companies Section */}
			<section
				className="py-20 relative bg-zinc-900/20 mb-10"
				style={{
					transform: `translate3d(0, ${Math.max(
						0,
						(scrollY - windowHeight * 1.2) * 0.15
					)}px, 0)`,
					opacity:
						scrollY > windowHeight * 1.0
							? Math.min(1, (scrollY - windowHeight * 1.0) / (windowHeight * 0.3))
							: 0,
				}}
			>
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent leading-16">
							Trusted by Leading Companies
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 mx-auto mb-8" />
						<p className="text-zinc-400 max-w-2xl mx-auto text-lg">
							I've had the privilege of working with innovative companies across
							various industries
						</p>
					</div>

					<div className="relative overflow-hidden">
						<CompanyCarousel isClient={true} />
					</div>

					<div className="text-center mt-12">
						<p className="text-zinc-500 text-lg">
							From early-stage startups to Fortune 500 companies
						</p>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 relative">
				<div className="max-w-7xl mx-auto px-6">
					<div
						className="text-center mb-16"
						style={{
							transform: `translateY(${Math.max(0, (scrollY - 2000) * 0.1)}px)`,
						}}
					>
						<h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent leading-16">
							Skills & Expertise
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 mx-auto mb-8" />
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{skills.map((skill, index) => (
							<div
								key={skill.name}
								className="bg-zinc-900/40 backdrop-blur border border-zinc-800/40 p-6 rounded-lg group hover:bg-zinc-800/40 transition-all duration-300 hover:transform hover:scale-105"
								style={{
									transform: `translateY(${Math.max(
										0,
										(scrollY - 2200 - index * 50) * 0.05
									)}px)`,
									transitionDelay: `${index * 100}ms`,
								}}
							>
								<div className="flex justify-between items-center mb-4">
									<h3 className="font-semibold text-lg">{skill.name}</h3>
									<span className="text-indigo-400 font-semibold">
										{skill.level}%
									</span>
								</div>
								<div className="mb-3">
									<div className="w-full bg-zinc-800 rounded-full h-2">
										<div
											className="bg-gradient-to-r from-indigo-500 to-indigo-400 h-2 rounded-full transition-all duration-1000 ease-out"
											style={{ width: `${skill.level}%` }}
										/>
									</div>
								</div>
								<p className="text-zinc-400 text-sm">{skill.category}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Portfolio Section */}
			<section id="portfolio" className="py-20 relative">
				<div className="max-w-7xl mx-auto px-6">
					<div
						className="text-center mb-16"
						style={{
							transform: `translateY(${Math.max(0, (scrollY - 2800) * 0.1)}px)`,
						}}
					>
						<h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent leading-16">
							Featured Work
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 mx-auto mb-8" />
						<p className="text-zinc-400 max-w-2xl mx-auto text-lg">
							A collection of projects that showcase my approach to solving complex
							design challenges
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<div
								key={project.title}
								className="group relative bg-zinc-900/40 backdrop-blur border border-zinc-800/40 rounded-lg overflow-hidden hover:bg-zinc-800/40 transition-all duration-500 hover:transform hover:scale-105"
								style={{
									transform: `translateY(${Math.max(
										0,
										(scrollY - 3000 - index * 100) * 0.05
									)}px)`,
									transitionDelay: `${index * 150}ms`,
								}}
							>
								<div className="relative overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									{/*<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<ExternalLink className="w-6 h-6 text-white" />
									</div> */}
								</div>

								<div className="p-6">
									<div className="flex items-center justify-between mb-3">
										<span className="text-indigo-400 text-sm font-medium">
											{project.category}
										</span>
									</div>
									<h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors duration-300">
										{project.title}
									</h3>
									<p className="text-zinc-400 mb-4 leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded-full border border-zinc-700/50"
											>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 relative">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<div
						className="mb-16"
						style={{
							transform: `translateY(${Math.max(0, (scrollY - 3600) * 0.1)}px)`,
						}}
					>
						<h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-indigo-300 bg-clip-text text-transparent leading-16">
							Let's Create Together
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 mx-auto mb-12" />
						<p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
							Ready to bring your next project to life? I'm always excited to work on
							challenging problems with innovative teams.
						</p>
					</div>

					<div
						className="bg-zinc-900/40 backdrop-blur border border-zinc-800/40 p-8 rounded-lg"
						style={{
							transform: `translateY(${Math.max(0, (scrollY - 3800) * 0.05)}px)`,
						}}
					>
						<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
							<a
								href="mailto:contact@heyitsmass.dev"
								className="group flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25"
							>
								<Mail size={20} />
								contact@heyitsmass.dev
							</a>

							<div className="flex gap-4">
								<a
									href="https://linkedin.com/in/heyitsmass"
									target="_blank"
									className="group p-3 bg-zinc-800/50 hover:bg-indigo-600 rounded-lg transition-all duration-300 transform hover:scale-110"
								>
									<Linkedin
										size={24}
										className="text-zinc-400 group-hover:text-white"
									/>
								</a>
								<a
									href="https://github.com/heyitsmass"
									target="_blank"
									className="group p-3 bg-zinc-800/50 hover:bg-indigo-600 rounded-lg transition-all duration-300 transform hover:scale-110"
								>
									<Github
										size={24}
										className="text-zinc-400 group-hover:text-white"
									/>
								</a>
							</div>
						</div>

						<p className="text-zinc-400">
							Always open to new opportunities • Based in Las Vegas, NV
						</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-8 border-t border-zinc-800/50">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<p className="text-zinc-500">
						© {new Date(Date.now()).getFullYear()} Brandon Cannon. Designed & developed
						with ❤️.
					</p>
				</div>
			</footer>
		</div>
	);
}
