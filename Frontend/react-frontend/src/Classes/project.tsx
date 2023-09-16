class project{
    private thumbnailLink:string = "";
    private screenshotLinks:string[] = [];
    private videosLinks:string[] = [];
    private skillsUsed:string[] = [];
    private shortDescription:string = "";
    private fullDescription:string = "";
    private downloadLink:string = "";


	constructor($thumbnailLink: string = "", $screenshotLinks: string[] = [], $videosLinks: string[] = [], $skillsUsed:string[] = [], $shortDescription: string = "", $fullDescription: string = "", $downloadLink: string = "") {
		this.thumbnailLink = $thumbnailLink;
		this.screenshotLinks = $screenshotLinks;
		this.videosLinks = $videosLinks;
		this.skillsUsed = $skillsUsed;
		this.shortDescription = $shortDescription;
		this.fullDescription = $fullDescription;
		this.downloadLink = $downloadLink;
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

}

export default project;