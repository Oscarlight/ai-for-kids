CREATE TABLE `course_sessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`nameZh` varchar(255),
	`description` text,
	`descriptionZh` text,
	`schedule` varchar(255) NOT NULL,
	`scheduleZh` varchar(255),
	`startDate` varchar(64) NOT NULL,
	`durationWeeks` int NOT NULL,
	`maxSlots` int NOT NULL DEFAULT 10,
	`isActive` boolean NOT NULL DEFAULT true,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `course_sessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `registrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sessionId` int NOT NULL,
	`parentEmail` varchar(320) NOT NULL,
	`childAge` int NOT NULL,
	`childName` varchar(255),
	`consentResearch` boolean NOT NULL DEFAULT false,
	`consentPrivacy` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `registrations_id` PRIMARY KEY(`id`)
);
