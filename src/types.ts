import { SkillBadgeProps } from './app/components/SkillBadge';

export enum EnumStatus {
	CONCEPT = 0,
	IN_PROGRESS = 1,
	HALFWAY = 2,
	ALMOST_DONE = 3,
	COMPLETED = 4,
}

export type TStatus = EnumStatus;

export type TSkillGroup = Omit<SkillBadgeProps, 'color'>[];

export type TSkillSet = { [x: string]: TSkillGroup };

export interface CredlyAPIResponse {
	data: Badge[];
	metadata: Metadata;
}

export interface Badge {
	id: string;
	expires_at_date: null;
	issued_at_date: Date;
	issued_to: string;
	locale: string;
	public: boolean;
	state: string;
	translate_metadata: boolean;
	accepted_at: Date;
	expires_at: null;
	issued_at: Date;
	last_updated_at: Date;
	updated_at: Date;
	earner_path: string;
	earner_photo_url: null;
	is_private_badge: boolean;
	user_is_earner: boolean;
	printable: boolean;
	issuer: Issuer;
	badge_template: BadgeTemplate;
	image: Image;
	image_url: string;
	evidence: any[];
	recommendations: any[];
}

export interface BadgeTemplate {
	id: string;
	description: string;
	global_activity_url: string;
	earn_this_badge_url: null;
	enable_earn_this_badge: boolean;
	enable_detail_attribute_visibility: boolean;
	job_board_url: null;
	name: string;
	public: boolean;
	recipient_type: string;
	vanity_slug: string;
	show_badge_lmi: boolean;
	show_skill_tag_links: boolean;
	settings_enable_related_badges: boolean;
	translatable: boolean;
	level: null;
	time_to_earn: null;
	cost: null;
	type_category: string;
	image: Image;
	image_url: string;
	url: string;
	owner_vanity_slug: string;
	badge_template_earnable: boolean;
	recommendable: boolean;
	issuer: Issuer;
	related_badge_templates: RelatedBadgeTemplate[];
	alignments: any[];
	badge_template_activities: BadgeTemplateActivity[];
	endorsements: any[];
	skills: Skill[];
}

export interface BadgeTemplateActivity {
	id: string;
	activity_type: string;
	required_badge_template_id: null;
	title: string;
	url: string;
}

export interface Image {
	id: string;
	url: string;
}

export interface Issuer {
	summary: string;
	entities: EntityElement[];
}

export interface EntityElement {
	label: string;
	primary: boolean;
	entity: EntityEntity;
}

export interface EntityEntity {
	type: string;
	id: string;
	name: string;
	url: string;
	vanity_url: string;
	internationalize_badge_templates: boolean;
	share_to_ziprecruiter: boolean;
	twitter_url: string;
	verified: boolean;
}

export interface RelatedBadgeTemplate {
	id: string;
	name: string;
	image: Image;
	image_url: string;
	url: string;
}

export interface Skill {
	id: string;
	name: string;
	vanity_slug: string;
}

export interface Metadata {
	count: number;
	current_page: number;
	total_count: number;
	total_pages: number;
	per: number;
	previous_page_url: null;
	next_page_url: null;
}
