class section{
    private title:string;
    private mainImage:string;
    private images:string[];
    private content:string;


	constructor($title: string, $mainImage: string, $images: string[], $content: string) {
		this.title = $title;
		this.mainImage = $mainImage;
        this.images = $images;
		this.content = $content;
	}
    
    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Getter $image
     * @return {string}
     */
	public get $mainImage(): string {
		return this.mainImage;
	}

    /**
     * Setter $image
     * @param {string} value
     */
	public set $mainImage(value: string) {
		this.mainImage = value;
	}

    /**
     * Getter $content
     * @return {string}
     */
	public get $content(): string {
		return this.content;
	}

    /**
     * Setter $content
     * @param {string} value
     */
	public set $content(value: string) {
		this.content = value;
	}

    /**
     * Getter $images
     * @return {string[]}
     */
	public get $images(): string[] {
		return this.images;
	}

    /**
     * Setter $images
     * @param {string[]} value
     */
	public set $images(value: string[]) {
		this.images = value;
	}

}

class project{
    private id:number = 0;
    private title:string = "";
    private thumbnailLink:string = "";
    private screenshotLinks:string[] = [];
    private videosLinks:string[] = [];
    private skillsUsed:string[] = [];
    private shortDescription:string = "";
    private fullDescription:string = "";
    private downloadLink:string = "";
    private projectPageSections:section[] = [];

	constructor
    (
        $id: number = 0, 
        $title: string = "", 
        $thumbnailLink: string = "", 
        $screenshotLinks: string[] = [], 
        $videosLinks: string[] = [], 
        $skillsUsed:string[] = [], 
        $shortDescription: string = "", 
        $fullDescription: string = "", 
        $downloadLink: string = "",
        $projectPageSections:section[] = []
    ) 
    {
		this.id = $id;
		this.title = $title;
		this.thumbnailLink = $thumbnailLink;
		this.screenshotLinks = $screenshotLinks;
		this.videosLinks = $videosLinks;
		this.skillsUsed = $skillsUsed;
		this.shortDescription = $shortDescription;
		this.fullDescription = $fullDescription;
		this.downloadLink = $downloadLink;
		this.projectPageSections = $projectPageSections;
	}

    /**
     * Getter $id
     * @return {number }
     */
	public get $id(): number  {
		return this.id;
	}

    /**
     * Getter $thumbnailLink
     * @return {string }
     */
	public get $thumbnailLink(): string  {
		return this.thumbnailLink;
	}

    /**
     * Setter $thumbnailLink
     * @param {string } value
     */
	public set $thumbnailLink(value: string ) {
		this.thumbnailLink = value;
	}


    /**
     * Getter $screenshotLinks
     * @return {string[] }
     */
	public get $screenshotLinks(): string[]  {
		return this.screenshotLinks;
	}

    /**
     * Setter $screenshotLinks
     * @param {string[] } value
     */
	public set $screenshotLinks(value: string[] ) {
		this.screenshotLinks = value;
	}

    /**
     * Getter $videosLinks
     * @return {string[] }
     */
	public get $videosLinks(): string[]  {
		return this.videosLinks;
	}

    /**
     * Setter $videosLinks
     * @param {string[] } value
     */
	public set $videosLinks(value: string[] ) {
		this.videosLinks = value;
	}

    /**
     * Getter $shortDescription
     * @return {string }
     */
	public get $shortDescription(): string  {
		return this.shortDescription;
	}

    /**
     * Setter $shortDescription
     * @param {string } value
     */
	public set $shortDescription(value: string ) {
		this.shortDescription = value;
	}

    /**
     * Getter $fullDescription
     * @return {string }
     */
	public get $fullDescription(): string  {
		return this.fullDescription;
	}

    /**
     * Setter $fullDescription
     * @param {string } value
     */
	public set $fullDescription(value: string ) {
		this.fullDescription = value;
	}

    /**
     * Getter $downloadLink
     * @return {string }
     */
	public get $downloadLink(): string  {
		return this.downloadLink;
	}

    /**
     * Setter $downloadLink
     * @param {string } value
     */
	public set $downloadLink(value: string ) {
		this.downloadLink = value;
	}
    

    /**
     * Getter $skillsUsed
     * @return {string[] }
     */
	public get $skillsUsed(): string[]  {
		return this.skillsUsed;
	}

    /**
     * Setter $skillsUsed
     * @param {string[] } value
     */
	public set $skillsUsed(value: string[] ) {
		this.skillsUsed = value;
	}

    /**
     * Getter $projectPageSections
     * @return {section[] }
     */
	public get $projectPageSections(): section[]  {
		return this.projectPageSections;
	}

    /**
     * Setter $projectPageSections
     * @param {section[] } value
     */
	public set $projectPageSections(value: section[] ) {
		this.projectPageSections = value;
	}


    /**
     * Getter $title
     * @return {string }
     */
	public get $title(): string  {
		return this.title;
	}

    /**
     * Setter $title
     * @param {string } value
     */
	public set $title(value: string ) {
		this.title = value;
	}

}

export {project, section};