import { Attributes, Source, Author, Title, Content } from "./Document"


interface ScanDoc {
    schemaVersion: string,
    id: string,
    version: number,
    issueDate: Date,
    url: string,
    author: Author,
    source: Source,
    dedupClusterId: string,
    title: Title,
    content: Content,
    attributes: Attributes,
    language: string

}
interface SearchResultItem {
    encodedId: string,  //ALERT
    influence: number,
    number: number
}
interface EventFiltersInfo {
    usedCompanyCount: number,
    companyLimit: number
}


export type { Attributes, EventFiltersInfo, SearchResultItem, ScanDoc }