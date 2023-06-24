import { Component } from '@angular/core';
import { TileType } from 'src/enums/tileType';
import { Section } from 'src/interfaces/section';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  title = 'Piotr Stasiak - Portfolio';

  sectionAboutName = 'about';
  sectionExperienceName = 'experience';
  sectionProjectsName = 'projects';

  navItems = [
    {
      label: 'O MNIE',
      sectionId: '#' + this.sectionAboutName,
      active: false,
    },
    {
      label: 'DOŚWIADCZENIE',
      sectionId: '#' + this.sectionExperienceName,
      active: false,
    },
    {
      label: 'PROJEKTY',
      sectionId: '#' + this.sectionProjectsName,
      active: false,
    },
  ];

  sectionAboutMe: Section = {
    id: this.sectionAboutName,
    items: [
      {
        title: 'O mnie',
        content:
          'Jak to się wszystko zaczęło? Swoją przygodę z programowaniem zacząłem już w 2014 roku, wtedy udałem się na studia inżynierskie o kierunku Informatyka w warszawskiej uczelni SGGW. Tytuł inżyniera otrzymałem w 2018 roku, a pracę jako programista rozpocząłem w 2015 roku jako młodszy programista .NET.' +
          '\n\n' +
          'Przez lata doświadczenia, które zbierałem zdecydowałem się pójść w stronę front-endu do któego od początku przejawiałem większe zainteresowanie. Obecnie mając kilkuletnie doświadczenie jako programista (głównie jako fullstack, a od niedawna front-end) zajmuję się projektowaniem oraz tworzeniem nowych funkcjonalności w jednym z większych projektów w mojej firmie. Dodatkowo chętnie służę radą oraz pomocą młodszym deweloperom, co nie stanowi dla mnie żadnego problemu i jest dobrą okazją do odświeżenia wiedzy.' +
          '\n\n' +
          'Kiedy nie jestem przed komputerem, lubię słuchać muzyki i poznawać nowe jej gatunki. Obejrzeć mecz piłko nożnej czy wyścig F1. Spędzić czas z moją narzeczoną oraz naszym psem Tobim albo wyjść gdzieś na miasto ze znajomymi.',
      },
    ],
  };

  sectionExperience: Section = {
    id: this.sectionExperienceName,
    items: [
      {
        title: 'Programista Front-End',
        subtitle: 'Aplikacje Krytyczne Sp. z o.o.',
        additionalInfo: 'KWI 2023 - OBECNIE',
        content:
          'Praca nad projektem CEWA (Centralna Ewidencja Wyrobów Akcyzowych). Samodzielne stworzenie projektu od zera, zaczynając od struktury projektu, a kończąc na koncepcji i podziale na komponenty. Projekt ruszył w okolicach Q1/Q2 2021 roku i trwa do dziś.',
        chips: ['Angular', 'RxJS'],
      },
      {
        title: 'Programista .NET',
        subtitle: 'Aplikacje Krytyczne Sp. z o.o.',
        additionalInfo: 'MAJ 2020 - KWI 2023',
        content:
          'Rozwój oraz utrzymanie następujących aplikacji: e-mikrofirma, formularz uproszczony JPK_VAT, formularz CUK, formularz ALK. Przy wszystkich projektach brałem czynny udział od samego początku aż po wdrożenie produkcyjne.',
        chips: ['Angular', 'RxJS', 'C#', 'Oracle DB'],
      },
      {
        title: 'Programista .NET',
        subtitle: 'BMS sp. z o.o.',
        additionalInfo: 'MAJ 2018 - KWI 2020',
        content:
          'Rozwój oraz utrzymanie aplikacji w architekturze trójwarstwowej. Interfejs użytkownika jest zarówno w wersji desktopowej (WPF) oraz webowej (Angular), backend został zrealizowany w C#, część bazodanowa to SQL Server. Komunikacja między warstwami klient-serwer odbywa się za pomocą WCF',
        chips: ['Angular', 'C#', 'MS SQL'],
      },
      {
        title: 'Młodszy programista .NET',
        subtitle: 'Pentacomp Systemy Informatyczne S.A.',
        additionalInfo: 'CZE 2015 - KWI 2018',
        content:
          'Praca przy aplikacjach webowych w technologii Microsoft – głównie ASP.NET MVC, Microsoft SQL Server. Brałem udział zarówno w etapie rozwoju jak i utrzymania aplikacji. Miałem bezpośredni kontakt z klientem, analizowałem jego potrzeby pod kątem nowych funkcjonalności oraz obsługiwałem bieżące zgłoszenia błędów.' +
          'Dla jednego z klientów został przeze mnie zaimplementowany algorytm służący do wyliczeń cen leków refundowanych w danym miesiącu oraz generowania obwieszczeń, które do dnia dzisiejszego można znaleźć na stronie Ministerstwa Zdrowia.',
        chips: ['C#', 'HTML', 'CSS', 'jQuery', 'MS SQL'],
      },
    ],
  };

  sectionProjects: Section = {
    id: this.sectionProjectsName,
    items: [
      {
        title: 'Tic Tac Toe',
        image: './assets/images/tictactoe.jpeg',
        routerUrl: '/tic-tac-toe',
        content: 'Kółko i krzyżyk w minimalistycznym wydaniu',
        chips: [],
      },
    ],
  };

  public tileType = TileType;

  toggleClass(item: any) {
    this.navItems.forEach((x) => (x.active = false));
    item.active = true;
  }
}
