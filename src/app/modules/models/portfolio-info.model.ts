import { compileClassDebugInfo } from "@angular/compiler";
import DatabaseSkill from "./database-skill.model";
import LanguageSkill from "./language-skill.model";
import { Locales } from "./locale.type";
import ProjectList from "./project-list.model";
import SocialLink from "./social-link.model";
import TechnologySkill from "./technology-skill.model";

// Bem, se você estiver lendo isso, pode ser porque liberei o código-fonte deste projeto no GitHub. Estou
// criando este projeto por puro entretenimento e até mesmo para aprendizado próprio. Portanto, haverá
// vários comentários desnecessários por aqui, mas quero lembrar que este não é um projeto sério ou algo do gênero...

// Muito provavelmente você vai encontrar mais comentários por aí, então apenas ignore, kkk.

type LanguageList = Array<LanguageSkill>; // Equivalente em C++: using LanguageList = std::vector<LanguageSkill>; ou typedef tradicional: typedef std::vector<LanguageSkill> LanguageList;
// Por que estou falando isso? Porque acho o TS muito similar ao C++ em alguns pontos e, como nos últimos tempos não tenho programado em C++,
// não quero esquecer as coisas que já aprendi. Por isso, sempre que vejo algo muito parecido com C++, comento para não esquecer e reforçar
// que realmente domino aquilo ;D
type DatabaseList = Array<DatabaseSkill>;
type TechnologyList = Array<TechnologySkill>;
type SocialList = Array<SocialLink>;

// Tava aqui olhando o código e pude perceber que em: LanguageSkill, DatabaseSkill, TechnologySkill e outros aí têm muitos campos semelhantes e que eu poderia reaproveitar,
// só utilizando o Omit<T, K> e já era. Só que, sinceramente, não tô a fim de fazer isso não: já criei os arquivos todos, etc... Vou deixar assim mesmo.
export default interface PortfolioInfo {
    bannerUrl?: string;
    avatarUrl?: string;
    name: string;
    role: string;
    about: string[]; // No seu JSON, 'about' é uma lista de parágrafos
    languages: LanguageList;
    databases: DatabaseList;
    technologies: TechnologyList;
    projects: ProjectList;
    socialLinks: SocialList;
}