document.addEventListener('DOMContentLoaded', function() {

    // --- Funcionalidade de Copiar E-mail ---
    const emailButton = document.getElementById('copy-email-button');
    if (emailButton) {
        const emailButtonText = document.getElementById('email-button-text');
        
        emailButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            const emailToCopy = 'fractalbrainmusic@gmail.com';
            navigator.clipboard.writeText(emailToCopy).then(function() {
                const currentLang = document.documentElement.lang;
                emailButtonText.textContent = translations[currentLang].emailCopied;
                setTimeout(function() {
                    emailButtonText.textContent = translations[currentLang].emailBooking;
                }, 2000);
            });
        });
    }

    // --- Funcionalidade de Tradução ---
    const translateButton = document.getElementById('translate-button');
    let currentLanguage = 'pt-br';

    const translations = {
        'pt-br': {
            'title-project': 'O Projeto',
            'bio-p1': 'Fractal Brain é o alter ego musical de Getúlio Vargas, produtor musical, DJ e designer brasileiro que mergulha fundo nas geometrias da consciência e na espiritualidade musical. Seu som navega por entre as espirais do Progressive Psytrance, mesclando paisagens sonoras psicodélicas com ritmos tribais, vocais ritualísticos e elementos orgânicos — uma verdadeira jornada sonora entre o sagrado, o espiritual e o futurista.',
            'bio-p2': 'Com uma forte estética visual inspirada na simetria fractal e nos mistérios da espiritualidade ancestral. Cada som é um portal multidimensional: ativa o corpo, expande a mente e toca o espírito.',
            'bio-p3': 'Lançando pela Phantom Unit Records, seu projeto se destaca pela fusão entre tecnologia e transcendência, com referências que vão de culturas indígenas ao misticismo oriental, tudo guiado por um pulso progressivo e hipnótico.',
            'bio-p4': 'Seu mais recente lançamento, "Divine Witch", celebra a força das bruxas ancestrais e suas medicinas espirituais, em um ritual dançante onde o trance encontra a natureza.',
            'bio-p5': '<strong>Fractal Brain não é apenas música — é uma expansão de consciência em forma de som.</strong>',
            'title-music': 'Músicas',
            'title-video': 'Último lançamento com vídeo Psicodélico no YouTube',
            'title-social': 'Redes Sociais & Plataformas',
            'title-contact': 'Contato',
            'contact-text': 'Para shows, remixes e colaborações:',
            'whatsapp-text': 'WhatsApp Booking',
            'copy-tooltip': 'Clique para copiar o E-mail',
            'emailBooking': 'E-mail Booking: fractalbrainmusic@gmail.com',
            'emailCopied': 'Email Copiado!',
            'title-materials': 'Materiais de Imprensa',
            'materials-button-text': 'Download Presskit & Materiais',
            'materials-password-text': 'O arquivo é protegido por senha. Por favor, solicite-a via WhatsApp ou E-mail.',
            'copyright-text': '© 2025 FRACTAL BRAIN. Todos os direitos reservados.',
            'translate-button': '<i class="fas fa-globe"></i> Translate to English'
        },
        'en': {
            'title-project': 'The Project',
            'bio-p1': 'Fractal Brain is the musical alter ego of Getúlio Vargas, a Brazilian music producer, DJ, and designer who delves deep into the geometries of consciousness and musical spirituality. His sound navigates through the spirals of Progressive Psytrance, blending psychedelic soundscapes with tribal rhythms, ritualistic vocals, and organic elements—a true sonic journey between the sacred, the spiritual, and the futuristic.',
            'bio-p2': 'With a strong visual aesthetic inspired by fractal symmetry and the mysteries of ancestral spirituality. Each sound is a multidimensional portal: it activates the body, expands the mind, and touches the spirit.',
            'bio-p3': 'Releasing on Phantom Unit Records, his project stands out for its fusion of technology and transcendence, with references ranging from indigenous cultures to Eastern mysticism, all guided by a progressive and hypnotic pulse.',
            'bio-p4': 'His latest release, "Divine Witch," celebrates the strength of ancestral witches and their spiritual medicines in a dancing ritual where trance meets nature.',
            'bio-p5': '<strong>Fractal Brain is not just music—it is an expansion of consciousness in the form of sound.</strong>',
            'title-music': 'Music',
            'title-video': 'Latest Release with Psychedelic Video on YouTube',
            'title-social': 'Social Media & Platforms',
            'title-contact': 'Contact',
            'contact-text': 'For bookings, remixes, and collaborations:',
            'whatsapp-text': 'WhatsApp Booking',
            'copy-tooltip': 'Click to copy E-mail',
            'emailBooking': 'E-mail Booking: fractalbrainmusic@gmail.com',
            'emailCopied': 'Email Copied!',
            'title-materials': 'Press Materials',
            'materials-button-text': 'Download Presskit & Materials',
            'materials-password-text': 'The file is password protected. Please request the password via WhatsApp or E-mail.',
            'copyright-text': '© 2025 FRACTAL BRAIN. All rights reserved.',
            'translate-button': '<i class="fas fa-globe"></i> Traduzir para Português'
        }
    };

    if (translateButton) {
        translateButton.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'pt-br' ? 'en' : 'pt-br';
            document.documentElement.lang = currentLanguage;

            for (const key in translations[currentLanguage]) {
                const element = document.getElementById(key);
                if (element) {
                    element.innerHTML = translations[currentLanguage][key];
                }
            }
        });
    }
});```

Pronto. O texto da sua biografia está atualizado e a função de tradução continuará funcionando perfeitamente com o novo conteúdo.