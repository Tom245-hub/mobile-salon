<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CurrentDateController
{
    /**
     * @Route(path="/index", name="CurrentDate")
     * @return Response
     */
    public function currentDate(): Response
    {
        $currentDate = new \DateTime();

        return new Response(
            '<html><body>'.$currentDate->format(DATE_ATOM).'</body></html>'
        );
    }
}