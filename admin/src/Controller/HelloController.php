<?php

namespace App\Controller;

use http\Message;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class HelloController
{
    /**
     * @Route(path="/hello/{name}/master", name="hello")
     * @param string $name
     * @param Request $request
     * @return Response
     */
    public function hello(string $name, Request $request): Response
    {
        $hello = 'Cześć!'.$name;
        $param1 = $request->get('param1');
        return new Response('<html><body>'.$hello.'<br>'.$param1.'</body></html>' );
    }

    public function moveToAction(string $action): RedirectResponse
    {
        if('hello' == $action){

        } else if ('currentDate' == $action){


        }
        throw new \Exception('Błąd');
    }

}