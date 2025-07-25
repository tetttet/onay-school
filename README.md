<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">ONAY-SCHOOL</h1></p>
<p align="center">
	<em><code>❯ REPLACE-ME</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/tetttet/onay-school?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/tetttet/onay-school?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/tetttet/onay-school?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/tetttet/onay-school?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

## Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

## Overview

<code>❯ REPLACE-ME</code>

---

## Features

<code>❯ REPLACE-ME</code>

---

## Project Structure

```sh
└── onay-school/
    ├── Dockerfile
    ├── README.md
    ├── eslint.config.mjs
    ├── middleware.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── image
    │   │   ├── about
    │   │   │   ├── aistudy.jpg
    │   │   │   ├── chuchuphinh-1164572.jpg
    │   │   │   ├── courses.jpg
    │   │   │   ├── ft
    │   │   │   │   ├── ft-1.jpg
    │   │   │   │   ├── ft-2.jpg
    │   │   │   │   ├── ft-3.jpg
    │   │   │   │   ├── ft-4.jpg
    │   │   │   │   ├── ft-5.jpg
    │   │   │   │   └── ft-6.jpg
    │   │   │   ├── historyofsucces.jpg
    │   │   │   ├── ielts.jpg
    │   │   │   ├── ielts.png
    │   │   │   ├── interactive.jpg
    │   │   │   ├── mobile.png
    │   │   │   ├── motivationtostudents.jpg
    │   │   │   ├── personalize.jpg
    │   │   │   ├── platformofstudents.png
    │   │   │   ├── schedule.jpg
    │   │   │   ├── st
    │   │   │   │   ├── st-1.jpg
    │   │   │   │   ├── st-2.jpg
    │   │   │   │   ├── st-3.jpg
    │   │   │   │   └── st-4.jpg
    │   │   │   ├── study.jpg
    │   │   │   ├── team
    │   │   │   │   ├── ielts.webp
    │   │   │   │   ├── sat.webp
    │   │   │   │   ├── turkish-burslari.png
    │   │   │   │   └── work-and-travel.png
    │   │   │   ├── tt
    │   │   │   │   ├── ielts-and-sat.jpg
    │   │   │   │   ├── turkiye-istanbul.jpg
    │   │   │   │   ├── unt-exam.jpg
    │   │   │   │   └── work-and-travel.jpg
    │   │   │   ├── turkiye.jpg
    │   │   │   ├── unt.webp
    │   │   │   └── workandtravel.jpg
    │   │   ├── course
    │   │   │   ├── css-course-image.jpg
    │   │   │   ├── javascript-course-image.jpg
    │   │   │   ├── python-course-image.jpg
    │   │   │   ├── react-course-image.jpg
    │   │   │   └── vue-course-image.jpg
    │   │   ├── logo
    │   │   │   ├── icon.png
    │   │   │   ├── logo-blue-removebg.png
    │   │   │   ├── logo-blue.jpeg
    │   │   │   ├── logo-removebg.png
    │   │   │   └── logo.jpeg
    │   │   └── user
    │   │       ├── Alice.jpg
    │   │       ├── John.jpg
    │   │       └── Sara.jpg
    │   └── videos
    │       └── hero.mp4
    ├── src
    │   ├── app
    │   │   ├── (home)
    │   │   │   ├── layout.tsx
    │   │   │   ├── loading.tsx
    │   │   │   └── page.tsx
    │   │   ├── about
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── contact
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── course
    │   │   │   ├── [slug]
    │   │   │   │   ├── loading.tsx
    │   │   │   │   └── page.tsx
    │   │   │   ├── all
    │   │   │   │   ├── .txt
    │   │   │   │   └── page.tsx
    │   │   │   └── layout.tsx
    │   │   ├── favicon.ico
    │   │   ├── globals.css
    │   │   ├── layout.tsx
    │   │   ├── not-found.tsx
    │   │   ├── platform
    │   │   │   ├── dashboard
    │   │   │   │   ├── courses
    │   │   │   │   ├── layout.tsx
    │   │   │   │   ├── messages
    │   │   │   │   ├── page.tsx
    │   │   │   │   ├── profile
    │   │   │   │   ├── progress
    │   │   │   │   └── users
    │   │   │   ├── layout.tsx
    │   │   │   └── page.tsx
    │   │   ├── profile
    │   │   │   ├── [username]
    │   │   │   │   └── page.tsx
    │   │   │   └── layout.tsx
    │   │   └── search
    │   │       ├── layout.tsx
    │   │       └── page.tsx
    │   ├── components
    │   │   ├── About.tsx
    │   │   ├── CourseProgress.tsx
    │   │   ├── Courses
    │   │   │   ├── AddCourseForm.tsx
    │   │   │   ├── AddStudents.tsx
    │   │   │   ├── CoursePage.tsx
    │   │   │   ├── MyCourse.tsx
    │   │   │   └── SearchCourse.tsx
    │   │   ├── DarkModeToggle.tsx
    │   │   ├── Dashboard
    │   │   │   ├── DashboardContent.tsx
    │   │   │   └── UserCard.tsx
    │   │   ├── Hero.tsx
    │   │   ├── SearchInput.tsx
    │   │   ├── Sidebar
    │   │   │   ├── DashboardSkeleton.tsx
    │   │   │   ├── Logo.tsx
    │   │   │   ├── LogoIcon.tsx
    │   │   │   └── SidebarMain.tsx
    │   │   ├── Sidebar.tsx
    │   │   ├── User
    │   │   │   ├── Course.tsx
    │   │   │   ├── Graph.tsx
    │   │   │   ├── Lesson.tsx
    │   │   │   └── Pie.tsx
    │   │   ├── auth
    │   │   │   ├── AddAdmin.tsx
    │   │   │   ├── AddTutor.tsx
    │   │   │   ├── AddUser.tsx
    │   │   │   └── Login.tsx
    │   │   ├── cards
    │   │   │   ├── AboutCard.tsx
    │   │   │   ├── CourseCard.tsx
    │   │   │   └── StudentCard.tsx
    │   │   ├── css
    │   │   │   ├── InfiniteScroll.css
    │   │   │   ├── ShinyText.css
    │   │   │   └── Squares.css
    │   │   ├── custom
    │   │   │   └── Kanban.jsx
    │   │   ├── demo
    │   │   │   ├── CardDemo.tsx
    │   │   │   ├── ContactsPage.tsx
    │   │   │   ├── HeroHome.tsx
    │   │   │   ├── HeroParallaxDemo.tsx
    │   │   │   ├── InfiniteMovingCardsDemo.tsx
    │   │   │   ├── Newsletter.tsx
    │   │   │   ├── SearchClient.tsx
    │   │   │   ├── TabsDemo.tsx
    │   │   │   ├── TimelineDemo.tsx
    │   │   │   ├── VideoMaskDemo.tsx
    │   │   │   └── WobbleCardDemo.tsx
    │   │   ├── layout
    │   │   │   ├── Footer.tsx
    │   │   │   └── Header.tsx
    │   │   ├── profile
    │   │   │   ├── Profile.tsx
    │   │   │   └── Toast.tsx
    │   │   ├── providers
    │   │   │   └── sidebar-provider.tsx
    │   │   ├── theme-provider.tsx
    │   │   └── ui
    │   │       ├── CourseDescription.tsx
    │   │       ├── DesktopSuggestions.tsx
    │   │       ├── ErrorModal.tsx
    │   │       ├── InfiniteScroll.tsx
    │   │       ├── MobileSuggestions.tsx
    │   │       ├── ProfileCourse.tsx
    │   │       ├── ShinyText.tsx
    │   │       ├── Squares.tsx
    │   │       ├── VideoMask.tsx
    │   │       ├── button.tsx
    │   │       ├── dropdown-menu.tsx
    │   │       ├── faq.tsx
    │   │       ├── headerline.tsx
    │   │       ├── hero-parallax.tsx
    │   │       ├── infinite-moving-cards.tsx
    │   │       ├── lens.tsx
    │   │       ├── loader.tsx
    │   │       ├── profile.tsx
    │   │       ├── progress.tsx
    │   │       ├── range-slider.tsx
    │   │       ├── search.tsx
    │   │       ├── sheet.tsx
    │   │       ├── sidebar.tsx
    │   │       ├── skeleton.tsx
    │   │       ├── tabs.tsx
    │   │       ├── text-hover-effect.tsx
    │   │       ├── timeline.tsx
    │   │       └── wobble-card.tsx
    │   ├── constant
    │   │   ├── courses.ts
    │   │   ├── images.ts
    │   │   ├── sidebarLinks.tsx
    │   │   └── url.ts
    │   ├── db
    │   │   └── lib
    │   │       ├── getCourseBySlug.ts
    │   │       └── getCourses.ts
    │   ├── lib
    │   │   ├── encryption.ts
    │   │   └── utils.tsx
    │   └── services
    │       ├── courseService.ts
    │       ├── mailService.ts
    │       ├── newsletterServices.ts
    │       ├── progessService.ts
    │       └── userService.ts
    └── tsconfig.json
```

### Project Index

<details open>
	<summary><b><code>ONAY-SCHOOL/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/tetttet/onay-school/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/tetttet/onay-school/blob/master/next.config.ts'>next.config.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/tetttet/onay-school/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/tetttet/onay-school/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/tetttet/onay-school/blob/master/middleware.ts'>middleware.ts</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/tetttet/onay-school/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/tetttet/onay-school/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/tetttet/onay-school/blob/master/Dockerfile'>Dockerfile</a></b></td>
				<td><code>❯ REPLACE-ME</code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<details>
				<summary><b>lib</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/lib/encryption.ts'>encryption.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/lib/utils.tsx'>utils.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>components</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/CourseProgress.tsx'>CourseProgress.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/theme-provider.tsx'>theme-provider.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/SearchInput.tsx'>SearchInput.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Hero.tsx'>Hero.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Sidebar.tsx'>Sidebar.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/About.tsx'>About.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/DarkModeToggle.tsx'>DarkModeToggle.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>css</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/css/InfiniteScroll.css'>InfiniteScroll.css</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/css/ShinyText.css'>ShinyText.css</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/css/Squares.css'>Squares.css</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>profile</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/profile/Toast.tsx'>Toast.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/profile/Profile.tsx'>Profile.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>demo</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/VideoMaskDemo.tsx'>VideoMaskDemo.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/TimelineDemo.tsx'>TimelineDemo.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/CardDemo.tsx'>CardDemo.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/HeroHome.tsx'>HeroHome.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/HeroParallaxDemo.tsx'>HeroParallaxDemo.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/InfiniteMovingCardsDemo.tsx'>InfiniteMovingCardsDemo.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/ContactsPage.tsx'>ContactsPage.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/Newsletter.tsx'>Newsletter.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/WobbleCardDemo.tsx'>WobbleCardDemo.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/TabsDemo.tsx'>TabsDemo.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/demo/SearchClient.tsx'>SearchClient.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>providers</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/providers/sidebar-provider.tsx'>sidebar-provider.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>cards</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/cards/StudentCard.tsx'>StudentCard.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/cards/CourseCard.tsx'>CourseCard.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/cards/AboutCard.tsx'>AboutCard.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>layout</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/layout/Footer.tsx'>Footer.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/layout/Header.tsx'>Header.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>custom</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/custom/Kanban.jsx'>Kanban.jsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Courses</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Courses/SearchCourse.tsx'>SearchCourse.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Courses/AddStudents.tsx'>AddStudents.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Courses/AddCourseForm.tsx'>AddCourseForm.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Courses/CoursePage.tsx'>CoursePage.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Courses/MyCourse.tsx'>MyCourse.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>auth</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/auth/AddUser.tsx'>AddUser.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/auth/AddAdmin.tsx'>AddAdmin.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/auth/AddTutor.tsx'>AddTutor.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/auth/Login.tsx'>Login.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Dashboard</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Dashboard/UserCard.tsx'>UserCard.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Dashboard/DashboardContent.tsx'>DashboardContent.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>User</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/User/Course.tsx'>Course.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/User/Pie.tsx'>Pie.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/User/Graph.tsx'>Graph.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/User/Lesson.tsx'>Lesson.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>Sidebar</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Sidebar/DashboardSkeleton.tsx'>DashboardSkeleton.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Sidebar/SidebarMain.tsx'>SidebarMain.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Sidebar/Logo.tsx'>Logo.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/Sidebar/LogoIcon.tsx'>LogoIcon.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>ui</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/faq.tsx'>faq.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/DesktopSuggestions.tsx'>DesktopSuggestions.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/headerline.tsx'>headerline.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/range-slider.tsx'>range-slider.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/lens.tsx'>lens.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/loader.tsx'>loader.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/wobble-card.tsx'>wobble-card.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/sheet.tsx'>sheet.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/progress.tsx'>progress.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/text-hover-effect.tsx'>text-hover-effect.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/CourseDescription.tsx'>CourseDescription.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/sidebar.tsx'>sidebar.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/ProfileCourse.tsx'>ProfileCourse.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/hero-parallax.tsx'>hero-parallax.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/Squares.tsx'>Squares.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/profile.tsx'>profile.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/button.tsx'>button.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/InfiniteScroll.tsx'>InfiniteScroll.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/MobileSuggestions.tsx'>MobileSuggestions.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/tabs.tsx'>tabs.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/skeleton.tsx'>skeleton.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/ShinyText.tsx'>ShinyText.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/search.tsx'>search.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/dropdown-menu.tsx'>dropdown-menu.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/infinite-moving-cards.tsx'>infinite-moving-cards.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/ErrorModal.tsx'>ErrorModal.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/timeline.tsx'>timeline.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/components/ui/VideoMask.tsx'>VideoMask.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>services</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/services/mailService.ts'>mailService.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/services/newsletterServices.ts'>newsletterServices.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/services/progessService.ts'>progessService.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/services/courseService.ts'>courseService.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/services/userService.ts'>userService.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>constant</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/constant/images.ts'>images.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/constant/url.ts'>url.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/constant/sidebarLinks.tsx'>sidebarLinks.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/constant/courses.ts'>courses.ts</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/layout.tsx'>layout.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/globals.css'>globals.css</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/not-found.tsx'>not-found.tsx</a></b></td>
						<td><code>❯ REPLACE-ME</code></td>
					</tr>
					</table>
					<details>
						<summary><b>profile</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/profile/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>[username]</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/profile/[username]/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>about</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/about/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/about/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>search</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/search/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/search/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>contact</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/contact/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/contact/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>course</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/course/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>[slug]</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/course/[slug]/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/course/[slug]/loading.tsx'>loading.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
							<details>
								<summary><b>all</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/course/all/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/course/all/.txt'>.txt</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>platform</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
							<details>
								<summary><b>dashboard</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/layout.tsx'>layout.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									<tr>
										<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/page.tsx'>page.tsx</a></b></td>
										<td><code>❯ REPLACE-ME</code></td>
									</tr>
									</table>
									<details>
										<summary><b>profile</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/profile/page.tsx'>page.tsx</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
										</blockquote>
									</details>
									<details>
										<summary><b>courses</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/courses/page.tsx'>page.tsx</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
											<details>
												<summary><b>all-courses</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/courses/all-courses/page.tsx'>page.tsx</a></b></td>
														<td><code>❯ REPLACE-ME</code></td>
													</tr>
													</table>
												</blockquote>
											</details>
											<details>
												<summary><b>[id]</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/courses/[id]/page.tsx'>page.tsx</a></b></td>
														<td><code>❯ REPLACE-ME</code></td>
													</tr>
													</table>
												</blockquote>
											</details>
											<details>
												<summary><b>my-courses</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/courses/my-courses/page.tsx'>page.tsx</a></b></td>
														<td><code>❯ REPLACE-ME</code></td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
									<details>
										<summary><b>users</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/users/page.tsx'>page.tsx</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
											<details>
												<summary><b>create-user</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/users/create-user/page.tsx'>page.tsx</a></b></td>
														<td><code>❯ REPLACE-ME</code></td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
									<details>
										<summary><b>messages</b></summary>
										<blockquote>
											<details>
												<summary><b>contact-messages</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/messages/contact-messages/page.tsx'>page.tsx</a></b></td>
														<td><code>❯ REPLACE-ME</code></td>
													</tr>
													</table>
												</blockquote>
											</details>
											<details>
												<summary><b>subscriptions</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/messages/subscriptions/page.tsx'>page.tsx</a></b></td>
														<td><code>❯ REPLACE-ME</code></td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
									<details>
										<summary><b>progress</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/progress/page.tsx'>page.tsx</a></b></td>
												<td><code>❯ REPLACE-ME</code></td>
											</tr>
											</table>
											<details>
												<summary><b>my-progress</b></summary>
												<blockquote>
													<table>
													<tr>
														<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/platform/dashboard/progress/my-progress/page.tsx'>page.tsx</a></b></td>
														<td><code>❯ REPLACE-ME</code></td>
													</tr>
													</table>
												</blockquote>
											</details>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
					<details>
						<summary><b>(home)</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/(home)/layout.tsx'>layout.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/(home)/page.tsx'>page.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/app/(home)/loading.tsx'>loading.tsx</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>db</b></summary>
				<blockquote>
					<details>
						<summary><b>lib</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/db/lib/getCourseBySlug.ts'>getCourseBySlug.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tetttet/onay-school/blob/master/src/db/lib/getCourses.ts'>getCourses.ts</a></b></td>
								<td><code>❯ REPLACE-ME</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

Before getting started with onay-school, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm
- **Container Runtime:** Docker

### Installation

Install onay-school using one of the following methods:

**Build from source:**

1. Clone the onay-school repository:

```sh
❯ git clone https://github.com/tetttet/onay-school
```

2. Navigate to the project directory:

```sh
❯ cd onay-school
```

3. Install the project dependencies:

**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```

**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker build -t tetttet/onay-school .
```

### Usage

Run onay-school using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm start
```

**Using `docker`** &nbsp; [<img align="center" src="https://img.shields.io/badge/Docker-2CA5E0.svg?style={badge_style}&logo=docker&logoColor=white" />](https://www.docker.com/)

```sh
❯ docker run -it {image_name}
```

### Testing

Run the test suite using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm test
```

---

## Project Roadmap

- [x] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://github.com/tetttet/onay-school/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/tetttet/onay-school/issues)**: Submit bugs found or log feature requests for the `onay-school` project.
- **💡 [Submit Pull Requests](https://github.com/tetttet/onay-school/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/tetttet/onay-school
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/tetttet/onay-school/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=tetttet/onay-school">
   </a>
</p>
</details>

---

## License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
